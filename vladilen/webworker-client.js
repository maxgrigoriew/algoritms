const worker = new Worker('webworker.js')

const button = document.querySelector('.button')

worker.addEventListener('message', (e) => {
  console.log('получены данные от сервера', e.data)
})

button.addEventListener('click', () => {
  worker.postMessage(1000000000)
})
