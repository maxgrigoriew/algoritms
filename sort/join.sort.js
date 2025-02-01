const arr = [ 10, 4, 6, -2, 3, 8, 2, 1 ];

function joinSort(arr) {
    if (arr.length <= 1)
        return arr;

    const middle = Math.fround(arr.length / 2);
    const left = joinSort(arr.slice(0, middle));
    const right = joinSort(arr.slice(middle));

    const res = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    return [ ...res, ...left.slice(i), ...right.slice(j) ];
}

console.log(joinSort(arr));