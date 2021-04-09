const path = require('path')

console.log(path.basename(__filename)) //return file name

console.log(path.dirname(__filename)); //return directory like __dirname

console.log(path.extname(__filename)) //extension name return เป็นนามสกุลของไฟล์

console.log(path.parse(__filename)) //return เป็น obj. ภายใน obj. มี property

console.log(path.join(__dirname, 'utils.js')) // join path หลายๆตัว 


