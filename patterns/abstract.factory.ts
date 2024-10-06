interface Animal {
    name: string
    operation(): void;
}

class Dog implements Animal {
    name = 'собачка'
    operation(): void {
        console.log('создан собака');
    }
}

class Cat implements Animal {
    name = 'кошка';
    operation(): void {
        console.log('создан кошка');
    }
}

abstract class Factory {
    public abstract create(): Animal;
}

class CreatorDog extends Factory {
    create(): Animal {
        return new Dog()
    }
}

class CreatorCat extends Factory {
    create(): Animal {
        return new Cat()
    }
}

function createAnimal(creator: Factory) {
    return creator.create()
}

const dog = createAnimal(new CreatorDog())
const cat = createAnimal(new CreatorCat())
console.log(dog, cat)

