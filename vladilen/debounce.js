function debounce(callback, ms) {
  let timer = null

  return function(arg) {
    clearTimeout(timer)
    console.log('arg', arg)
    timer = setTimeout(() => {
      callback.call(this, arg)
    }, ms)
  }
}

function search(e, hello) {
  console.log('search', e.target.value, hello)
}

const input = document.querySelector('.input')
const timer = debounce((e) => search(e, 'привет'), 500)

input.addEventListener('input', timer)
