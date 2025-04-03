const arr = ["flow", "flower","flsdfsdfsfdo", "flee"]
function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";

    let prefix = arr[0];
    let count = 0
    debugger
    for (const str of arr) {
        while (str.indexOf(prefix) !== 0) {
            count++
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    console.log(count);
    return prefix;
}
const result = longestCommonPrefix(arr)

console.log(result);