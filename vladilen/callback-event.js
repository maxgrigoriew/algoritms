const prom1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('1')
  }, 111)
})

Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise)
             .then(resolve)
             .catch(reject)
    }
  })
}

Promise.myRace([
         prom1,
       ])
       .then((res) => {
         console.log(res)
       })
       .catch((er) => {
         console.log(er)
       })

