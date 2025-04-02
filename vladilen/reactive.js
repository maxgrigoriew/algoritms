
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const counter = document.querySelector('.counter')


function renderCount() {
  counter.textContent = counterStateProxy.counter
}

// 1 реализация
function useCounter() {
  let count = 0

  function renderCount() {
    counter.textContent = count
  }

  return {
    setCounter(value) {
      count = value
      renderCount()
    },
    getCounter() {
      return count
    },
  }
}

// 2 реализация

const counterState = {
  _value: 0,
  get value() {
    return this._value
  },
  set value(v) {
    this._value = v
    renderCount()
  }
}

let obj = { _counter: 0 }

const counterStateProxy = new Proxy(obj, {
  get(target, prop) {
    if (prop === 'counter') {
      return target._counter;
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === 'counter') {
      if (typeof value !== 'number') {
        throw new Error('Value must be a number');
      }
      target._counter = value;
      renderCount(); // Вызываем обновление UI
    } else {
      target[prop] = value;
    }
    return true;
  }
});



increment.addEventListener('click', () => {
  counterStateProxy.counter+=1
  console.log(counterStateProxy)
  console.log(obj)
})

decrement.addEventListener('click', () => {
  counterStateProxy.counter = 0
})


// const counterState = new Proxy({ value: 0 }, {
//   get(target, prop) {
//     console.log(`Доступ к свойству "${prop}": ${target[prop]}`);
//     return target[prop];
//   }
// });
//
// console.log(counterState.value);

