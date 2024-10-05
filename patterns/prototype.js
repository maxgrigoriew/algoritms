// простая реалиция может быть с обычным объектом и Object.create()
class Original {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name + ' hello');
    }
}

const original = new Original('max', 31);

const dublicat = Object.create(original, { newField: { value: 'Moskow' } });

