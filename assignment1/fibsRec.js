function fibsRec(num, a=0, b=1, arr=[]) {
    if (num < 1) return arr;
    return [a].concat(fibsRec(num -1, b, b + a, arr));
}

console.log(fibsRec(8))