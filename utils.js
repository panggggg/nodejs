exports.calculateVat = function calculateVat(money, vat) {
    return money * vat / 100;
}

exports.sayHello = function sayHello() {
    console.log('Hello');
}




//การ export โดยการสร้างเป็น obj.
// module.export = {
//     calculateVat,
//     sayHello
// };

//สามารถทำได้ทั้ง 2 แบบ