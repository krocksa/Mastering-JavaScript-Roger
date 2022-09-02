function getElementsUpTo(array, n) {
  // your code here
  for(i=n-1;i<array.length;i++){
    array.pop(array[i])
  }
  return array
}
console.log(getElementsUpTo(['a','b','c','d','e'],3));