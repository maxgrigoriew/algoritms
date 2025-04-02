const palindrom = 93939

function isPalindrom(num) {
  if (num < 0 || num % 10 === 0) return false
  if (num < 10) return true

  let rev = 0

  while (num > rev) {
    rev *= 10 // на каждой иттераци умножаем на 10 чтобы приплюсовывать следующее число

    rev += num % 10

    num = Math.floor(num / 10)
  }

  return num === rev || num === Math.floor(rev / 10)
}

console.log(isPalindrom(palindrom))


console.log(Math.floor(106 / 10))
