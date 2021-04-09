// const utils = require('./utils'); //การ import modules

// utils.sayHello(); //การเรียกใช้ฟังก์ชัน

// const vat7 = utils.calculateVat(100, 7);
// console.log(vat7)



//destructuring
const { sayHello, calculateVat } = require('./utils'); //การ import modules

sayHello(); //การเรียกใช้ฟังก์ชัน

const vat7 = calculateVat(100, 7);
console.log(vat7)
console.log(__filename)


// (function (exports, require, module, __filename, __dirname) {
//     const { sayHello, calculateVat } = require('./utils'); //การ import modules

//     sayHello(); //การเรียกใช้ฟังก์ชัน

//     const vat7 = calculateVat(100, 7);
//     console.log(vat7)
// });