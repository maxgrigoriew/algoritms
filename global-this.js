function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.log('фигура переместилась');
};

function Rectangle() {
  Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
const rect = new Rectangle(2, 4);
let object = { num: 1 };
let obj = Object.create({});

Object.defineProperty(obj, 'name', {
  value: 'Max',
  writable: true,
});

Object.defineProperties(obj, {
  age: {
    value: 33,
    writable: true,
  },
});

obj.name = 1;
obj.inner = {
  city: 'Bryansk',
};
Object.seal(obj);
obj.name = 333;
console.log(obj.name);
console.log(Object.isSealed(obj));
