function removeOddValues(obj) {
    // your code here
    for (const prop in obj) {
        if (obj[prop] % 2 != 0) {
            delete obj[prop];
        }
    }
    return obj
}