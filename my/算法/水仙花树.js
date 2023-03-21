// 153

const isTrue = num => {
    const n = num.toString().length
    const str = num.toString()
    let total = 0

    for(let i = 0; i < n; i++){
        total += Math.pow(Number(str[i]), n)
    }
}

// isTrue(370)

const getNumber = n => {
    let min = Math.pow(10, n-1),
        max = Math.pow(10, n),
        arr = []
    if(n === 1 ) {
        min = 0
    }
    for(let j = min;j < max;j++) {
        if(isTrue(j)) {
            arr.push(j)
        }
    }
    return arr
}
getNumber(4)