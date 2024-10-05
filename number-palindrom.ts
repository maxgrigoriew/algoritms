const palindrom = 12421
 

function checkPalindrom(num) {
   if (num < 0) {
    return false
   } 
    if (num < 10) {
    return true
   } 
    if (num % 10 === 0) {
    return false
   }

    let reverse = 0

    while(num > reverse) {
        reverse*=10
        reverse+= num % 10

        num = Math.trunc(num / 10)
        console.log(num, reverse)
    }

    return num === reverse || num === Math.trunc(reverse / 10)
 
}

console.log(checkPalindrom(palindrom))
