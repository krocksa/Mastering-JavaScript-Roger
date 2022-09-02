function getAllElementsButFirst(array) {
  // your code here
  res= array.shift()
  return array
}
console.log(getAllElementsButFirst([1,2,3,4]));