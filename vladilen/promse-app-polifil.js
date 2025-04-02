const prom1 = new Promise(function(resolve, reject) {
  resolve('1')
})

const prom3 = new Promise(function(resolve, reject) {
  reject('2')
})

Promise.myall = function(values) {
  return new Promise(function(resolve, reject) {
    let result = []
    let total = 0

    values.forEach((item, index) => {
      Promise.resolve(item).then((res) => {
        result[index] = res
        total++
        if (total === values.length)
          resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

Promise.myall([
         prom1,
         prom3,
       ])
       .then((res) => {
         console.log(res)
       })
       .catch((er) => {
         console.log(er)
       })

