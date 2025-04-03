// const letterCombinations = function (digits) {
//     const store = {
//         2: 'abc',
//         3: 'def',
//         4: 'ghi',
//         5: 'jkl',
//         6: 'mno',
//         7: 'pqrs',
//         8: 'tuv',
//         9: 'wxyz'
//     };
//
//     const arr = Array.from(digits);
//     const result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         const currentLetters = store[arr[i]];
//         for (let j = 0; j < currentLetters.length; j++) {
//            result.push(currentLetters[j])
//         }
//     }
//
//     return result;
// };
//
// console.log(letterCombinations('2'));

const letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const store = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result = ['']; // Начинаем с пустой строки

    for (const digit of digits) {
        const newResult = [];
        const letters = store[digit];

        for (const combination of result) {
            for (const letter of letters) {
                newResult.push(combination + letter); // Добавляем каждую букву к каждой существующей комбинации
            }
        }

        result = newResult; // Обновляем результат
    }

    return result;
};

console.log(letterCombinations('2543')); // ['a', 'b', 'c']
