

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let count = 0

function foo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++
      if (arr[j] < arr[i]) {
        ;[arr[i], arr[j]] = [arr[i], arr[j]]
      }
    }
  }

  return arr
}

console.log(foo(arr))
console.log(count);

