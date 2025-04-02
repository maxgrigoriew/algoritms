
const arr = [6, 5, 4, 3, 1]

function foo(arr) {

    if (arr.length <= 1) return arr
    
    let start = 0
    let end = arr.length
    let pivotIndex = Math.floor((start + end) / 2)

    let pivot = arr[pivotIndex]
    const less = []
    const great = []

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue
        else if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            great.push(arr[i])
        }
    }

    return [...foo(less), pivot, ...foo(great)]
}

console.log(foo(arr))