
const counterState = {
};

function renderCount() {
  console.log('renderCount')
}

// Добавление геттера и сеттера для существующего свойства '_value'
Object.defineProperty(counterState, 'value', {
  get() {
    return this._value;
  },
  set(newValue) {
    console.log(`Устанавливаем value: ${newValue}`);
    this._value = newValue;
    renderCount();
  },
  enumerable: true,  // Свойство будет видно при переборе
  configurable: true  // Свойство можно будет удалить или изменить
});

// Использование свойства 'value'
counterState.value = 5;  // Выведет: Устанавливаем value: 5
console.log(counterState.value);  // 5

// Можно добавить другие свойства аналогично
Object.defineProperty(counterState, 'anotherValue', {
  get() {
    return this._value * 2;
  },
  set(newValue) {
    console.log(`Устанавливаем anotherValue: ${newValue}`);
    this._value = newValue / 2;
  },
  enumerable: true,
  configurable: true
});

console.log(counterState.anotherValue);  // 10 (в 2 раза больше _value)
counterState.anotherValue = 20;  // Выведет: Устанавливаем anotherValue: 20
console.log(counterState._value);  // 10

console.log(counterState)

