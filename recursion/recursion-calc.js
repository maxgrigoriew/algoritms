let company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
};

function foo(arr) {
  let sum = 0;

  if (arr instanceof Array) {
    return arr.reduce((acc, item) => acc + item.salary, 0);
  }

  for (let item of Object.values(arr)) {
    sum += foo(item);
  }
  return sum;
}

function calcSalary(source) {
  let result = 0;

  if (Array.isArray(source)) {
    return source.reduce((acc, item) => acc+  item.salary, 0)
  }

  for (let i = 0; i < Object.values(source).length; i++) {
    result += calcSalary(Object.values(source)[i])
  }

  return result

}

console.log(calcSalary(company));
