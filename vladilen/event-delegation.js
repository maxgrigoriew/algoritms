const button = document.querySelector('.delegation .wrapper .btn')
const wrapper = document.querySelector('.delegation .wrapper')

console.log(button, wrapper)

button.addEventListener('click', (e) => {
  // e.stopImmediatePropagation()
  e.stopPropagation()
  console.log('button')
  console.log(e.target)
  console.log(e.currentTarget)
}, )

// данное событие не вызовется при испльзовании e.stopImmediatePropagation() на предыдущем событии
button.addEventListener('click', (e) => {
  console.log('второе событие')
}, )

wrapper.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('wrapper')
}, )