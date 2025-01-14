// interface Animal {
//     operation(): void;
// }
//
// class Dog implements Animal {
//     constructor(public name: string) {
//         this.name = name
//     }
//
//     operation(): void {
//         console.log('создан собака' + this.name);
//     }
// }
//
// class Cat implements Animal {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     operation(): void {
//         console.log('создан кошка' + this.name);
//     }
// }
//
// abstract class Factory {
//     public abstract create(name: string): Animal;
// }
//
// class CreatorDog extends Factory {
//     create(name: string): Animal {
//         return new Dog(name)
//     }
// }
//
// class CreatorCat extends Factory {
//     create(name: string): Animal {
//         return new Cat(name)
//     }
// }
//
// function createAnimal(creator: Factory, name: string) {
//     return creator.create(name)
// }
//
// const dog = createAnimal(new CreatorDog(), 'rex')
// const cat = createAnimal(new CreatorCat(), 'murzik')
//
// console.log(dog, cat)
//

interface Product {
    getName(name: string): void
}

class ConcreteProduct1 implements Product {
    getName(name: string) {
        console.log('product 1')
    }
}

class ConcreteProduct2 implements Product {
    getName(name: string) {
        console.log('product 2')
    }
}

abstract class Creator {
    abstract create(): void
}

class CreatorProduct1 extends Creator {
    create() {
        console.log('created product 1')
        return new ConcreteProduct1();
    }
}

class CreatorProduct2 extends Creator {
    create() {
        console.log('created product 2')
        return new ConcreteProduct2();
    }
}

function createProduct(creator: Creator) {
    return creator.create();
}

const dog = createProduct(new CreatorProduct1())

console.log(dog)




