function fib(num) {
    let arr = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < num; ++i) {
        arr.push(a);
        [a, b] = [b, a + b];
    }

    return arr;
}

console.log(fib(8));