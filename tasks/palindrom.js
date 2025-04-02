const isPalindrom = (str) => {
    let temp = ''

    for (let i = str.length -1; i >= 0; i--) {
        temp+= str[i]
    }

    return temp === str;
}
console.log(isPalindrom('awa'));