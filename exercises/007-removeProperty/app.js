let obj = {
  car: 'Mustang GT 500',
  name: 'Sam',
  age: 20
}
function removeProperty(obj,age) {
  delete obj.name;
  delete obj.age
  return obj
}
console.log(removeProperty(obj,'age'));
