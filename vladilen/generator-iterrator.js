const obj = {
  name: 'max',
  age: 20,
  [Symbol.iterator]() {
    const keys = Object.keys(this)
    let index = 0

    return {
      next() {
        if (index < keys.length) {
          const key = keys[index++]
          return { value: this[key], done: false }
        }
        return { value: undefined, done: true }
      },
    }
  },
}

// Реализация метода Symbol.iterator()

// Проверка итератора
const iterator = obj[Symbol.iterator]()
// console.log(iterator.next()); // { value: 'max', done: false }
// console.log(iterator.next()); // { value: 20, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// Использование цикла for...of
for (const value of obj) {
  console.log(value) // Выводит: max, 20
}
const iterrator = {
  gen(n = 4) {
    let i = 0
    return {
      next() {
        if (i < n) {
          i++
          return { value: i, done: false }
        }
        return { value: undefined, done: true }
      },
    }
  },
}

const gen = iterrator.gen()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// сделали неитерируемое число итерируемым с помощью генератора
function* generator(obj) {
  for (let i = 0; i < obj; i++) {
    yield i
  }
}

const n = generator(10)
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())


// вывели значения массива через цикл благодаря встроенному итератору. со строками так же работает
const arr1 = [1,2,3,4]

const arrIterator = arr1[Symbol.iterator]()

while(true) {
  const res= arrIterator.next()
  if (res.done)
    break
  console.log(res.value)
}


