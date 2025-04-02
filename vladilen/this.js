const obj = {
  name: 'max',
  getName(greating, dot) {
    console.log(greating + ' ' + this.name + ' ' + dot)
  }
}

function getName(greating, dot) {
  console.log(greating + ' ' + this.name + ' ' + dot)
}

function wrapper() {
  return () => {
    console.log(this)
  }
}
function arrFunc (a, a){
  console.log(a, a)
}

console.log(arrFunc(1))
// const bindFoo = getName.bind(obj, 'firstArgument')
// getName.call(obj, 'firstArgument')
// getName.apply(obj, ['firstArgument', 'second'])
//
// bindFoo('one', 'two')

