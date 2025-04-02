function isSimpleNumber(num) {
  if (num <= 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

function foo(n) {
  if (n <=1) return n
  for(let i = 0; i< n; i++) {

  }
}
console.log(isSimpleNumber(2))
console.log(isSimpleNumber(3))
console.log(isSimpleNumber(4))
console.log(isSimpleNumber(5))
