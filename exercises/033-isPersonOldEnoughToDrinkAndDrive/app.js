let person = {
  age: 20
} 

function isPersonOldEnoughToDrinkAndDrive(obt) {
  // the person object contains an "age" property inside
  // Add your code after this line
 if (obt.age > 20) {
  return true
 }
 else if (obt.age < 21){
  return false
 }
 return false
}
console.log(isPersonOldEnoughToDrinkAndDrive(person));