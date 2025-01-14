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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.getName = function (name) {
        console.log('product 1');
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.getName = function (name) {
        console.log('product 2');
    };
    return ConcreteProduct2;
}());
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());
var CreatorProduct1 = /** @class */ (function (_super) {
    __extends(CreatorProduct1, _super);
    function CreatorProduct1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatorProduct1.prototype.create = function (product) {
        console.log('created product 1');
        return new ConcreteProduct1();
    };
    return CreatorProduct1;
}(Creator));
var CreatorProduct2 = /** @class */ (function (_super) {
    __extends(CreatorProduct2, _super);
    function CreatorProduct2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatorProduct2.prototype.create = function (product) {
        console.log('created product 2');
        return new ConcreteProduct2();
    };
    return CreatorProduct2;
}(Creator));
function createProduct(creator, product) {
    return creator.create(product);
}
var dog = createProduct(new CreatorProduct1(), new ConcreteProduct1());
console.log(dog);
