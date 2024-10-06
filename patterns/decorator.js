class Cofee {
    makeCofee() {
        return 10;
    }

    descriptionCofee() {
        return 'кофе'
    }
}
// оборачиваем исходный класс классом оберткой чтобы расширить функционал

class CofeeMild extends Cofee {
    makeCofee() {
        return super.makeCofee() + 2;
    }

    descriptionCofee() {
        return super.descriptionCofee() + ' с молоком';
    }
}

const cofee =new Cofee()
console.log(cofee.makeCofee());


const cofeeMilk =new CofeeMild()
console.log(cofeeMilk.makeCofee());