const str = '(()[]{})'

function foo(str) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  let stack = []

  for (let i = 0; i < str.length; i++) {
    const current = str[i]
    if (!brackets[current]) {
      stack.push(current)
    } else if (stack.pop() !== brackets[current]) return false
  }

  if (stack.length > 0) return false

  return true
}

console.log(foo(str))

