const http = require('http');
const path = require('path');
const fs = require('fs'); //ใช้ในการอ่านไฟล์
const moment = require('moment');

function getPage(page) {
    const filePath = path.join(__dirname, page); //สร้างตัวแปร
    return fs.readFileSync(filePath);
}

function handleFiles(req, res) {
    const fileType = path.extname(req.url) || '.html'; //ถ้าไฟล์นี้ไม่มีนามสกุล จะใส่เป็น .html ให้

    if (fileType === '.html') { //check นามสกุลว่าเท่ากับ html ไหม
        res.setHeader('Content-Type', 'text/html'); //การset response ส่ง html กลับไปยัง browser
        res.writeHead(200); //set statusCode

        if (req.url === '/') {
            res.write(getPage('index.html')); //page = index.html ส่งพารามิเตอร์ไปยังฟังก์ชัน getPage  
        } else {
            res.write(getPage(`${req.url}.html`));
        }

        res.end();// return ไปยัง browser

    } else if (fileType === '.css') {
        res.setHeader('Content-Type', 'text/css'); //การset response ส่ง html กลับไปยัง browser
        res.writeHead(200);
        res.write(getPage(req.url));
        res.end();

    } else {
        res.writeHead(404);
        res.end();
    }
}

function getData(url) {
    let data;
    if (url === '/apis/users') {
        data = [{
            name: 'Pawornwan'
        },
        {
            name: 'Pang'
        }];

    } else if (url === '/apis/posts') {
        data =
            [{
                title: 'A',
                publishedDate: moment().startOf('day').fromNow() //publishedDate เป็นการจำลองเวลา
            },
            {
                title: 'B',
                publishedDate: moment().set('month', 1).startOf('day').fromNow()
            }]
    }
    return data;
}

function handleAPIs(req, res) {
    let data = getData(req.url);

    if (data) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data)); //แปลง data เป็น json
    } else {
        res.writeHead(404);
    }
    res.end();
}

http.createServer((req, res) => {
    if (req.url.startsWith('/apis/')) {
        handleAPIs(req, res);
    } else {
        handleFiles(req, res);
    }
}).listen(3000) //create server port 3000

