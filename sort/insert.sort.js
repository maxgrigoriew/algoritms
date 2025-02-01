const arr = [10,4,6,3,8,2,1]

function foo(arr) {

    for(let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;

        while(current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = current
    }

    return arr
}

console.log(foo(arr));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = i;
        while (arr[current - 1] !== undefined && comparator(arr[current], arr[current - 1]) < 0) {
            swap(arr, current - 1, current);
            current--;
        }
    }
}