// оборачиваем несколько действий с один класс и скрываем эти сливаем эти действия в одно
class Computer {
    constructor(computer) {
        this.computer = computer
    }

    turnOn() {
        console.log('компьютер включен');
    }

    openIde() {
        console.log('отккрыта ide');
    }

    runProject() {
        console.log('запущен проект');
    }
}

// const computer = new Computer()
// computer.turnOn()
// computer.openIde()
// computer.openIde()


// фасад решает проблему

class Facade {
    constructor(computer) {
        this.computer = computer
    }

    run() {
        console.log('выполню три действия за один метод');
        this.computer.turnOn()
        this.computer.openIde()
        this.computer.openIde()
    }
}

const computerWithFacade = new Facade(new Computer())
computerWithFacade.run()