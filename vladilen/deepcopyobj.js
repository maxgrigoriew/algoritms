const obj = {
  user: {
    name: 'max',
  },
  permissions: [
    {
      access: 'read'
    },
    {
      access: 'write'
    }
  ],
  year: 2010
}

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null)
    return obj

  if (Array.isArray(obj)) {
    return obj.map((it) => deepCopy(it))
  }

  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)]))
}

const res = deepCopy(obj)

console.log(res.permissions === obj.permissions)
