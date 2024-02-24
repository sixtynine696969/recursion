function mergesort(arr) {
    if (arr.length == 1) return arr;

    let arr1 = mergesort(arr.splice(0, arr.length/2))
    let arr2 = mergesort(arr);
    let finalArray = [];

    while (arr1.length && arr2.length) {

        // if (arr1[0] <= arr2[0]) {
        //     finalArray.push(arr1.shift())
        // } else if (arr2[0] <= arr1[0]){
        //     finalArray.push(arr2.shift())
        // }
        
        (arr1[0] <= arr2[0]) ? finalArray.push(arr1.shift()) : finalArray.push(arr2.shift())
    }

    // if (!arr1.length) {
    //     finalArray.push(...arr2)
    // } else if (!arr2.length) {
    //     finalArray.push(...arr1);
    // }

    (arr1.length) ? finalArray.push(...arr1) : finalArray.push(...arr2);

    return finalArray;
}

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergesort([105, 79, 100, 110]));