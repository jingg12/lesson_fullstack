let ary = [1,[2,[3,[4,5]]],6];
let str = JSON.stringify(ary);// 序列化
// let o = {a:1,b:2,c:3}

// es10 内置flat API，
// ary =ary.flat(Infinity);// es10(2019) 提供的flat API  兼容性
// console.log(ary);
// console.log(str);
//    【//正则的类型 字符串匹配的规则  
//      g 正则的修饰符：表型全局不停下来，一直匹配  
//     （）代表分组，匹配的各种可能放到分组里 |或者 正则是按字符匹配的，
//      [a-z] 匹配一个小写字符 [a-z](3,5)
//      [ 本身是正则的运算符 \[ 转译一下  匹配[字符本身】
//      
//       replace方法  正则匹配到的替换成  空
// ary = str.replace(/(\[|\])/g,'').split(',').map(item => +item)
// console.log(ary);

// str = str.replace(/(\[|\])/g, '')
// console.log(str);
// str ='[' + str +']'
// ary = JSON.parse(str)
// console.log(ary);

// let result = []
// let fn = function(ary) {
//     for(let i = 0; i < ary.length; i++) {
//         let item = ary[i];
//         if(Array.isArray(arr[i])){
//             fn(item)
//         }else{
//             result.push(item)
//         }
//     }
// }

    // const flatten = (ary) => {
    //     return ary.reduce((pre,cur) => {
    //     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    //     },[])
    // }
    // console.log(flatten(ary));


while (ary.some(Array.isArray)){
    ary = [].concat(...ary)
}
console.log(ary);