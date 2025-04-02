const arr = [1, 2, 2, 3, 1, 1]

function foo(arr, num) {
  let result = []
  for (let i = 0; i < arr.length - 2; i++) {
    console.log('i', i)
    for (let j = i + 1; j < arr.length - 1; j++) {
      console.log('j', j)
      for (let k = j + 1; k < arr.length; k++) {
        console.log('k', k)
        if (arr[i] + arr[j] + arr[k] === num) {
          console.log('true')

          result.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }

  return result
}

console.log(foo(arr, 5))
