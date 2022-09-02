let obj = {
    a: 8,
    b: 2,
    c: 'Colombia'
}

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (const prop in obj) {
        if (obj[prop].length > num) {
            delete obj[prop];
        }
        
    }
    return obj
}
console.log(removeStringValuesLongerThan(7, obj));