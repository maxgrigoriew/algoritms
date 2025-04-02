Array.prototype.myMap = function(callback) {
  const res = []

  this.forEach((item, ind, arr) => {
    res.push(callback(item, ind, arr))
    return item
  })

  return res
}

const arr = [ 1, 2, 3 ]
const filter = arr.filter((it) => it === 1)


const res = arr.myMap((it) => it * 2)


const filterArr = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]
Array.prototype.myFilter = function(callback) {
  const res = []

  this.forEach((item, ind, arr) => {
    if (callback(item, ind, arr)) {
      res.push(item)
    }
    return item
  })

  return res
}

const resFilter = filterArr.myFilter(function(it, ind, filterArr) {
  console.log(filterArr)
  return it.id === 3
})

console.log(resFilter)