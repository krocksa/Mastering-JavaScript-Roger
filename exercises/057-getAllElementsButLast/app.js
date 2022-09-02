function getAllElementsButLast(array) {
    // your code here
    res= array.pop()
    return array
  }
  console.log(getAllElementsButLast([1,2,3,4]));