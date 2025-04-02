function foo(size) {
  let arr = []
  for (let i = 1; i <= size; i++) {
    let row = []
    for (let j = 1; j <= size; j++) {
      row.push(j * i)
    }

    arr.push(row)
  }

  return arr
}

multiplicationTable = function (size) {
  let r = []
  for (let i = 1; i <= size; i++) {
    let x = []
    for (let j = 1; j <= size; j++) {
      x.push(i * j)
    }
    r.push(x)
  }
  return r
}

foo(3)
console.log(foo(4))
