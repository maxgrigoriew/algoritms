
let arr = [7, 6, 5, 4, 3, 2, 1]
let count = 0

function foo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i
    for (let j = i + 1; j < arr.length; j++) {
      count++
      if (arr[j] < arr[small]) small = j
    }
    if (small !== i) {
      ;[arr[small], arr[i]] = [arr[i], arr[small]]
    }
  }

  return arr
}

console.log(foo(arr))
console.log(count);

