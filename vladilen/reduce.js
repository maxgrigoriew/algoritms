const arr = [2,4,6]

const res = arr.reduce((acc, item, ind, arr) => {
  if (arr.length === ind + 1)
    return (acc += item) / arr.length

  return acc += item
}, 0)


console.log(res)