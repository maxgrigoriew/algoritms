const arr = [ 10, 4, 6, -2, 3, 8, 2, 1 ];

function joinSort(arr) {
    if (arr.length <= 1)
        return arr;

    const pivot = arr[Math.floor(arr.length / 2)];

    const left = arr.filter(it => it < pivot);
    const right = arr.filter(it => it > pivot);
    const middle = arr.filter(it => it === pivot);

    return [ ...joinSort(left), ...middle, ...joinSort(right) ];
}

console.log(joinSort(arr));