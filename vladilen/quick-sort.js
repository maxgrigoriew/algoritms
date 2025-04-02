
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let count = 0

function foo(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const less = []
    const great = []
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]

    for (let i = 0; i < arr.length; i++) {
        count++
        if (arr[i] === pivot) continue
        else if (arr[i] < pivot) less.push(arr[i])
        else if (arr[i] > pivot) great.push(arr[i])
    }
    return [...foo(less), pivot, ...foo(great)]
}

console.log(foo(arr))
console.log(count)