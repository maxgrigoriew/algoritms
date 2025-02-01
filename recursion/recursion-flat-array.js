let arr = [ 1, 2, [ 9, 2, 3, [ 7, 1, 1, [ [ [ [ 5, 6 ] ] ] ] ] ] ];

function foo(...source) {
    let result = [];

    for (let i = 0; i < source.length; i++) {
        let currentEl = source[i];

        if (Array.isArray(currentEl)) {
            result.push(...foo(...currentEl));
        } else {
            result.push(currentEl);
        }
    }
    return result;
}

console.log(foo(arr));
