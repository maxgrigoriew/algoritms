const Animal = function (options) {
  this.name = options.name
  this.color = options.color
  this.d = options.d
  this.voice = function () {
    console.log('this.voice is', this.name)
  }
}

// данный метод можно переобпределять, в отличие от метода в родительском классе
Animal.prototype.getName = function () {
  console.log('Animal old method:', this.name)
}

const dog = new Animal({ name: 'rex', color: 'red', age: 11, d: 1 })

console.log(dog)
//настледцес св ва класса Animal
const Cat = function (options) {
  // копируем поля родителя
  Animal.apply(this, arguments )
  console.log(arguments)
  // вконструкторе дочернего класса добавляем новые поля
  this.hasTail = options.hasTail
  this.type = 'cat'
}

// Cat.prototype = Object.create(Animal.prototype)
// переопределяем конструктор

Cat.prototype.constructor = Animal.prototype.constructor

const cat = new Cat({ name: 'barsik', color: '#000', hasTail: true })


/////////////////////////////////////
//         CLASS
/////////////////////////////////////

class ClassAnimal {
  constructor(options) {
    this.name = options.name
    this.color = options.color
  }
  voice() {
    console.log('this ClassVoise:', this.name)
  }
}

let classDog = new ClassAnimal({ name: 'dos', color: 'red' })

class ClassCat extends ClassAnimal {
  constructor(options) {
    super(options)
    this.hasTail = options.hasTail
  }
  age() {
    console.log('agec Class Cat:', this.name)
  }
  voice() {
    super.voice()
    console.log('this Class voie Cat:', this.name)
  }
}

const classCat = new ClassCat({
  name: 'murzik',
  color: 'blue',
  hasTail: false,
})

