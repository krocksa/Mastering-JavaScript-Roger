function getElementsAfter(array, n) {
  // your code here
  for(i=0;i<=n;i++){
    array.shift(array[i])
  }
  return array
}
console.log(getElementsAfter(['a','b','c','d','e'],2));