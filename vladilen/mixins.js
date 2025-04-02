let user = {
  name: 'John',
}

Object.defineProperty(user, 'name', {
  writable: false,
})

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
console.log(descriptor)
user.name = 'Igor'
console.log(user.name )
