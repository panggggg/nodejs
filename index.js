const utils = require('./utils'); //การ import modules

utils.sayHello(); //การเรียกใช้ฟังก์ชัน

const vat7 = utils.calculateVat(100, 7);
console.log(vat7)
