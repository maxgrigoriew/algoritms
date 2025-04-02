let arr = [1, 2, 3, 4, 5, 6, 10]

function foo(arr, item) {
    let start = 0
    let end = arr.length
    let middle

    while (start <= end) {
        middle = Math.floor((end + start) / 2)
        if (item === arr[middle]) {
            return middle
        }

        if (item < arr[middle]) {
            end = middle - 1
        }

        else {
            start = middle + 1

        }
    }

    return null
}

console.log(foo(arr, 10))
