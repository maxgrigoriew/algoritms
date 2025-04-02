console.log("Начало");

setTimeout(() => {
  console.log("setTimeout");
}, 200);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(() => console.log("fetch"));

setTimeout(() => {
  console.log("setTimeout 2");
}, 50);
console.log("Конец");