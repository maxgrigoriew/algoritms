Promise.customAllSetled = function(promises) {

  return new Promise((resolve) => {
    let count = 0
    const result = []

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(data => {
        result[index] = {
          data,
          status: 'fillfield',
        }
      }).catch(error => {
        result[index] = {
          reason: error,
          status: 'rejected',
        }
      }).finally(() => {
        count++
        if (count == result.length) {
          resolve(result)
        }
      })
    })
  })
}

Promise.customAll = function(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([])

    let count = 0
    const result = []

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
             .then((data) => {
               result[index] = data
               count++
               if (count === promises.length) {
                 resolve(result)
               }
             })
             .catch((reason) => {
               reject(reason)
             })
    })
  })
}

Promise.customRace = function(promises) {
  return new Promise((res, rej) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(res)
        .catch(rej)
    })
  })
}

const prom4 = new Promise((res, rej) => setTimeout(() => rej('100'), 1220))
const prom5 = new Promise((res, rej) => setTimeout(() => res('200'), 200))
const prom6 = new Promise((res, rej) => setTimeout(() => res('300'), 300))

const res = Promise.customRace([ prom4, prom5, prom6 ])
res.then(data => console.log(data)).catch(r => console.log(r))


