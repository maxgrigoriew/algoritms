const arr = [10,4,6,3,8,2,1]

function foo(arr) {

    for(let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;

        while(j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = current
    }

    return arr
}

console.log(foo(arr));
