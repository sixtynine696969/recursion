// function fibsRec(num, a=0, b=1, arr=[]) {
//     if (num < 1) return arr;
//     return [a].concat(fibsRec(num -1, b, b + a, arr));
// }

function fibsRec(num) {
    if (num === 2) return [0, 1]

    let arr = fibsRec(num - 1)
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    return arr;
}


console.log(fibsRec(8));