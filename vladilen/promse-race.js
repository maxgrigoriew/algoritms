const prom1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('1')
  }, 111)
})
const prom2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('3')
  }, 2)
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

// Promise.myRace = function(values) {
//   const promise = new Promise(function(resolve, reject) {
//     for (const promise of values) {
//       Promise.resolve(promise).then((res) => {
//         resolve(promise)
//       }).catch((err) => {
//         reject(err)
//       })
//     }
//   })
//   return promise
// }

Promise.myRace([
         prom1,
         prom2,
       ])
       .then((res) => {
         console.log(res)
       })
       .catch((er) => {
         console.log(er)
       })

