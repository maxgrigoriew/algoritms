const romanToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanToInt(string) {
    let total = 0;
    const n = string.length;

    for (let i = 0; i < n; i++) {
        if (i < n - 1 && romanToInt[string[i]] < romanToInt[string[i + 1]]) {
            total -= romanToInt[string[i]];
        } else {
            total += romanToInt[string[i]];
        }
    }
    return total;
}

function intToRoman(num) {
    const val = [10, 9, 5, 4, 1];
    const sym = ["X", "IX", "V", "IV", "I"];

    let roman = "";

    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman += sym[i];
            num -= val[i];
        }
    }

    return roman;
}

const result = romanToInt('XC')
const intToRomain = romanToInt(123)
console.log(result);