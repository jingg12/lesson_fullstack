// node  的模块化 common.js
console.log('webpack 运行了。。。。');
module.exports = {
    //入口
    entry: './main.js',
    output: {
        filename: './bundle.js'
    }
}