const http = require('http');
const path = require('path');
const fs = require('fs');

function getPage(page) {
    const filePath = path.join(__dirname, page); //สร้างตัวแปร
    return fs.readFileSync(filePath);
}

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); //ส่ง html กลับไปยัง browser
    res.writeHead(200); //statusCode
    res.write(getPage('index.html'));
    res.end();
}).listen(3000) //create server port 3000