function removeFromFront(arr) {
    // your code here
    aux = arr.shift(arr[0])
    return arr
}
console.log(removeFromFront([1,2,3]));