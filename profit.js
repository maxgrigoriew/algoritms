const price = [5, 3, 1, 2, 6];

let arr = [4, 3, 2, 1];

// function maxProfit(arr) {
//   let profit = 0

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i + 1] > arr[i]) {
//       profit += arr[i + 1] - arr[i]
//     }
//   }

//   return profit
// }

// линейная скорость

// reduce

const maxProfit = (arr) =>
  arr.reduce(
    (acc, item, index, arr) =>
      arr[index + 1] > arr[index] ? (acc += arr[index + 1] - arr[index]) : acc,
    0
  );

console.log(maxProfit(price));
