function checkNum(num) {
  let str = num.toString();
  return +str.slice(str.length);
}

console.log(checkNum(123));
