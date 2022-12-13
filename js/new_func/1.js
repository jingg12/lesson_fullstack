var stuA = {
    name: 'caizong'
};
var stuB = {
    name: 'liuzong'
};
function sayHi(...args) {
    console.log(arguments, ...args);
    console.log(`你好,我是${this.name}`);
}
Object.prototype.sayHi = sayHi;
// stuA, stuB 都能 sayHi
// call 改天换名， 手动指定this 的指向
// this -> 调用
// sayHi.call(stuB);
// sayHi.call(stuA);
// stuA.sayHi();
sayHi.call(stuB,1,2)
sayHi.apply(stuB,[1,2]);
// var func = sayHi.bind(stuB);
// func();
