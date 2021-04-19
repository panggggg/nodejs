const http = require('http');
const path = require('path');
const fs = require('fs'); //ใช้ในการอ่านไฟล์

function getPage(page) {
    const filePath = path.join(__dirname, page); //สร้างตัวแปร
    return fs.readFileSync(filePath);
}

http.createServer((req, res) => {
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


}).listen(3000) //create server port 3000

