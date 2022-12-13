'use strict';
// 变量作用域
var name = '龙'//全局 window
// this 指向 调用方式
// js 变量属于 作用域
function fnc() {
    y = 2;  //不加 var 全局，不好
    var name = 'jay'; // func 内部 局部变量
    {     // 块级作用域
        let x = 1;
        var z = 3;
        let name = '涛'// es5 不支持块状作用域
    }
    console.log(y,z);
}
func();
console.log(y);