const obj = {
  name: 'max',
  address: {
    street: 'Walk',
    house: 1
  }
}

function getCopyObject(obj) {
  if (Object.keys(obj).length === 0)
    return obj;

 if (typeof value !== 'object' || value === null) {
   return value;
 }

 if (Array.isArray(value)) {
   return value.map((item) => getCopyObject(item))
 }


  return 

}