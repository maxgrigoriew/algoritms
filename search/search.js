// const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 12];

// function foo(arr, num) {
//   let start = 0;
//   let end = arr.length;
//   let middle;
//   let found = false;
//   let count = 0;
//
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     count++;
//     if (arr[middle] === num) {
//       found = true;
//       console.log(count);
//       return middle;
//     } else if (num < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return null;
// }
//
// console.log(foo(array, 12));

const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 12];

function foo(arr, num) {
    let start = 0
    let end = arr.length
    let middle

    while (start <= end) {
        middle = Math.floor((start + end) / 2)

        if (arr[middle] === num) {
            return middle
        }

        else if (num < arr[middle]) {
            end = middle -1
        } else {
            start = middle + 1
        }
    }
    return null
}

console.log(foo(array, 12))