let arr = [5, 3, 2, 6, 8,]


function sort(arr: number[]) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }

  return arr
}

console.log(sort(arr))