var arr = [1, [2, [3,4]], 5];
// 递归

function flatten(arr) {
    
    return arr.toString().split(',').map(item => +item );
}

// [1,2,3,4,5]
console.log(flatten(arr));