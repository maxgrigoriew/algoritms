const arr = [ 10, 4, 6, 3, 8, 2, 1 ];

function foo(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i)
            [ arr[i], arr[min] ] = [ arr[min], arr[i] ];

    }

    return arr;
}

console.log(foo(arr));