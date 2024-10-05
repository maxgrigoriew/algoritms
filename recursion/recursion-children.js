let arr = [
    {
        id: 1,
        parentId: null,
    },
    {
        id: 2,
        parentId: 1,
    },
    {
        id: 3,
        parentId: 1,
    },
    {
        id: 4,
        parentId: null,
    },
    {
        id: 5,
        parentId: 4,
    },
];

function foo(arr) {
    return arr.filter(it => it.parentId === null).map(it => ({ ...it, options: foo(arr, it.id) }));
}


console.log(foo(arr));
