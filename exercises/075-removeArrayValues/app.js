
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
function removeArrayValues(obj) {
    // your code here
    for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
        delete obj[prop];
    }
}
return obj
}
console.log(removeArrayValues(obj));