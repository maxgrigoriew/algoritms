const arr : Number[] = [5, 3, 2, 6, 8,]


function sort(arr: number[]) {

  for (let i = 0; i < arr.length; i++) {
    let current = i
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[current] > arr[j]) {
        current = j
      }
    }

    if (current !== i) {
      [arr[current], arr[i]] = [arr[i], arr[current]]
    }

  }

  return arr
}

console.log(sort(arr))