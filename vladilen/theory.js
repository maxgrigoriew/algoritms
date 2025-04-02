let arr = [5, 3, 4, 2, 1]

function foo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j
      }
    }

    if (small !== i) {
      let current = arr[small]
      arr[small] = arr[i]
      arr[i] = current
    }
  }

  return arr
}

console.log(foo(arr))
