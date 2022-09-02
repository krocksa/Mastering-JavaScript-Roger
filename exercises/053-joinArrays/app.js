function joinArrays(arr1, arr2) {
  // your code here
  for(i=0;i<arr2.length;i++){
    arr1.push(arr2[i])
  }
  return arr1
}
console.log(joinArrays([1, 2],[3, 4]));