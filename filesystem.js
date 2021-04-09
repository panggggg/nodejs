const path = require('path');
const fs = require('fs');

// fs.writeFileSync(path.join(__dirname, 'data.txt'), 'Hello');
//สร้างไฟล์ sync ทำเลย เหมาะกับไฟล์ชนาดเล็ก

//สร้างไฟล์ แบบasync
// fs.writeFile(path.join(__dirname, 'data2.txt'), 'Hello2', () => {
//     console.log('Finished writing file');
// });


//อ่านไฟล์
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8'));

