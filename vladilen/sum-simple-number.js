function* generator(n) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

function solution(number) {
  if (number <= 0)
    return 0
  let sum = 0

  for (const item of generator(number)) {
  for (const item of generator(number)) {
    if (item % 3 === 0 || item % 5 === 0) {
      sum += item
    }
    console.log(item)
  }

  return sum
}

const res = solution(10)
console.log(res)