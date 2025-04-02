Array.prototype.myMap = function(callback) {
  const result = []

  this.forEach((item, ind, ar) => {
    result.push(callback(item, ind, ar))
  })

  return result
}

const arr = [1,2,3,4].myMap((item, ind) => ({
  name: item,
  ind
}))

console.log(arr)

