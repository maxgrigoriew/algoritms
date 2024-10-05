interface IIntervals {
  0: number;
  1: number;
}

const intervals: IIntervals[] = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function foo(arr: IIntervals[]): IIntervals[] {
  if (arr.length < 2) {
    return arr;
  }

  const arrSort = arr.sort((a, b) => a[0] - b[0]);
  const result: IIntervals[] = [arrSort[0]];

  for (let item of arrSort) {
    let recent = result[result.length - 1];

    if (recent[1] >= item[0]) {
      recent[1] = Math.max(item[1], recent[1]);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(foo(intervals));
