let nums = [1,2,3];
let obj = {val: 5}
// 原数组不会受影响
// 命令式编程到函数式
// 参数是有三个，按需使用 第三个参数是数组本身
let newNums = nums.map(function(item,index,array){
    //没有返回值
    // return
    return item + index + array[index] + this.val;
},obj)
console.log(newNums);
