const palindrom = 12321

// function foo(num) {
//     if (num < 0) return false
//     if (num < 10) return true
//
//     const copyNum = num;
//     let reversed = 0
//
//     while(num > reversed) {
//         reversed = reversed * 10 + (num % 10)
//         num = Math.floor(num / 10)
//     }
//
//     return copyNum === reversed || copyNum === Math.floor(reversed / 10)
// }

function isPalindrome(num) {
    if (num < 0) return false;
    if (num < 10) return true;

    let reversed = 0;
    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.trunc(num / 10);
    }

    return num === reversed || num === Math.trunc(reversed / 10);
}


function isPalindromeToString(num) {
    if (num < 0) return false;
    if (num < 10) return true;

    let reversed = 0;
    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.trunc(num / 10);
    }

    return num === reversed || num === Math.trunc(reversed / 10);
}

console.log(isPalindrome(1));