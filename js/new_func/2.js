// 立即运行函数
// window  
// this外层来的
(() => {
    // 不会分配this给他
    console.log(this);
})()