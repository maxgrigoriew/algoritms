// похож на декоратор, но прокси может контролировать доступ к объекту и запрещать при условиях

class Door {
    open() {
        console.log('открыто');
    }
}

class Proxy {
    constructor(door) {
        this.door = door;
    }

    autentification(key) {
        return key === 1;
    }

    open(key) {
        if (this.autentification(key)) {
           return   this.door.open();
        }

        console.log('доступ запрещен');

    }
}

// const door = new Door();
// door.open();

// добавили пароль
const doorProxy = new Proxy(new Door());
doorProxy.open(1);