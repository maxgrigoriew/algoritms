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
    ConcreteProduct1.prototype.operation = function () {
        console.log('создан продукт 1');
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        console.log('создан продукт 2');
    };
    return ConcreteProduct2;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.create = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Factory));
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.create = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Factory));
function createProduct(factory) {
    factory.create();
}
var productFactory = createProduct(new ConcreteCreator1());
console.log(productFactory);
