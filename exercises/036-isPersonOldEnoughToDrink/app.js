let obj= {
  age: 19
}

function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  if (person.age >= 21) {
    return true
   } else {
    return false
   }   
  }
  console.log(isPersonOldEnoughToDrink(obj));  