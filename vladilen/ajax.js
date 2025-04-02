function parse(data) {
  let parseArr = [ ...data ]
  let init = 0
  let arr = []

  for (let i = 0; i < parseArr.length; i++) {

    if (parseArr[i] == 'i') {
      init += 1
    } else if (parseArr[i] == 'd') {
      init -= 1
    } else if (parseArr[i] == 's') {
      init *= init
    } else if (parseArr[i] == 'o') {
      arr.push(init)
    }
  }
  console.log(arr)
}

parse('iiiosdo')