/////////////////////////////////// DB //////////////////////////////

const users = [
  { id: 1, name: 'max', addressId: 1 },
  { id: 2, name: 'igor', addressId: 2 },
  { id: 3, name: 'alex', addressId: 3 },
]

const addresses = [
  { id: 1, name: 'Moskow' },
  { id: 2, name: 'Perm' },
  { id: 3, name: 'Smolensk' },
]

/////////////////////////////////// ад колбеков //////////////////////////////

function findUser(id, callback) {
  setTimeout(() => {
    const user = users.find((it) => it.id === id)
    callback(user)
  }, 440)
}

function findAddress(id, callback) {
  const address = addresses.find((it) => it.id === id)
  callback(address)
}

// findUser(1, (data) => {
//   // сначала нашли пользователя
//   if (!data) {
//     console.log('Пользователь не найден')
//     return
//   }
//   //теперь ищем адрес пользователя
//
//   findAddress(data.addressId, (data) => {
//     console.log(data || 'адрес не найден')
//   })
// })

////////////////////////// promise //////////////////////////////////////////

function findUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((it) => it.id === id)
      user ? resolve(user) : reject('Пользователь не найден')
    }, 440)
  })
}

function findAddressPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const address = addresses.find((it) => it.id === id)
      address ? resolve(address) : reject('Адрес не найден')
    })
  }, 111)
}

findUserPromise(1)
  .then(user => {
    // тут я хочу получить и предыдущий промис в следующем then
    return findAddressPromise(user.addressId)
    return Promise.my
    // return Promise.race([findAddressPromise(user.addressId), user])
  })
  .then(firstPromise => console.log(firstPromise), (error) => console.log(error))

////////////////////////// async await //////////////////////////////////////////

async function findUserAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((it) => it.id === id)
      user ? resolve(user) : reject('Пользователь не найден')
    }, 440)
  })
}

function findAddressAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const address = addresses.find((it) => it.id === id)
      address ? resolve(address) : reject('Адрес не найден')
    })
  }, 111)
}

// создаем третью функцию где будем выполять await

async function getUserAddress() {
  try {
    const user = await findUserAsync(1);

    const result = await Promise.allSettled([
      // оборачиваем в промис данные, чтобы они были в allSetled
      Promise.resolve(user),
      findAddressAsync(user.addressId)
    ])
    const data = result.map((it) => it.value || it.reason)
  } catch (e) {
    console.log(e)
  }
}

getUserAddress()
