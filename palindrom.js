const palindrom = ' aB bba   ';

function checkPalindrom(str) {
  let strCopy = str.toLowerCase().replace(/\s/g, '');
  return strCopy === [...strCopy].reverse().join('');
}

// for

function checkPalindrom(str) {
  str = str.toLowerCase().replace(/\s/g, '');

  const middle= Math.floor(str.length / 2)

   for (let i = 0; i < middle; i++) {
     if (str[i] !== str.at(-1 - i)) {
       return false
     }
   }
  return true;
}
console.log(checkPalindrom(palindrom));
