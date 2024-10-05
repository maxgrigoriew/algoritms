class Singleton {
    static instance;
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
            return
        }

        return  Singleton.instance
    }
}

const singleton1 = new Singleton()
const singleton2 = new Singleton()

console.log(singleton1 === singleton2);


// функция

const funcSingleTon = new function() {
    console.log('консоль уже отображается без инстрансов');
    console.log(this, 'this');
    const instance = this

    return function () {
        return instance;
    }
}

const singleton3 = new funcSingleTon()
const singleton4 = new funcSingleTon()

console.log(singleton4 === singleton3);