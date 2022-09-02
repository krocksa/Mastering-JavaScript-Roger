let myObj = {};
myObj.key = true;
function addProperty(obj,key) {
  // your code here
  Object.defineProperty(obj,key,{
    value: true
  })
  return obj
}

console.log(addProperty(myObj,'key'));
