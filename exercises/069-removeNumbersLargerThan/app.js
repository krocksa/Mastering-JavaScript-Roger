let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    for (const prop in obj) {
        if (obj[prop] > num) {
            delete obj[prop];
        }
    }
    return obj
}
console.log(removeNumbersLargerThan(5,obj));