const input = document.querySelector('.input')
const sendBtn = document.querySelector('.send')
const checkBtn = document.querySelector('.check')
const deleteBtn = document.querySelector('.delete')
const list = document.querySelector('.list')
const modal = document.querySelector('.window')
const modalInner = document.querySelector('.window__inner')
const listItem = document.getElementsByClassName('item')[0]

const tabsTop = document.querySelectorAll('.tabs__top-item')
const tabsBottom = document.querySelectorAll('.tabs__bottom-item')

const tasks = [
  {
    title: 'задача 1',
    completed: true,
  },
  {
    title: 'задача 2',
    completed: false,
  },
]

function renderTasks() {
  list.innerHTML = ''
  tasks.forEach((task, index) => {
    list.insertAdjacentHTML('beforeend', getNoteTemplate(task, index))
  })
}

renderTasks()

function getNoteTemplate(task, index) {
  if (input === '') {
    return false
  }
  return ` <li  class="row item mb-3">
  <div class="text col-8 ${
    task.completed ? 'text-decoration-line-through' : ''
  }">${ task.title }</div>
  <div class="col-4 d-flex justify-content-end">
    <button class="check btn bg-${
    task.completed ? 'warning' : 'success'
  } w-100 plus" data-index='${ index }' data-type="check">Выполнить</button>
    <button class="delete btn bg-light w-100 plus mx-3" data-type='delete' data-index='${ index }'>Удалить</button>
  </div>
</li>`
}


sendBtn.addEventListener('click', () => {
  if (!input.value)
    return

  // list.innerHTML = ''
  const newObj = {
    title: input.value,
    completed: false,
  }
  tasks.push(newObj)
  console.log(tasks)

  renderTasks()
  input.value = ''
})

list.addEventListener('click', (e) => {
  if (e.target.dataset.index) {
    const index = +e.target.dataset.index
    const type = e.target.dataset.type

    if (type === 'check') {
      tasks[index].completed = !tasks[index].completed
      renderTasks()
    } else {
      checkoutModal(e.target.dataset.index)
    }
  }
})

function checkoutModal(index) {
  const modalClassList = modal.classList

  modalClassList.contains('open')
    ? modalClassList.remove('open')
    : modalClassList.add('open')
}

modal?.addEventListener('click', (e) => {
  console.log(e)

  if (e.target.classList.contains('window') || e.target.closest('.no'))
    checkoutModal()

  if (e.target.closest('.yes')) {
    let index = e.target.dataset.index
    tasks.splice(+index, 1)
    renderTasks()
    checkoutModal()
  }
})

;(function() {
  function foo(index = 0) {
    tabsBottom.forEach((el, ind) => {
      if (+el.dataset.index !== index) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    })
  }

  foo()

  tabsTop.forEach((el, ind) => {
    el.addEventListener('click', (e) => {
      foo(+e.currentTarget.dataset.index)
    })
  })
})()
