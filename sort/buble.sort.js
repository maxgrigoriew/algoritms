const arr = [10,4,6,3,8,2,1]

function foo(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -1 -i; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j + 1], arr[j]]] = [[arr[j], arr[j + 1]]]
            }
        }
    }

    return arr
}

console.log(foo(arr));