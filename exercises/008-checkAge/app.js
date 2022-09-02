function checkAge(name, age) {
  if (age < 21) {
    return 'Go home, ' + (name) +'!';
  } else {
    return 'Welcome, ' + (name) +'!';
  }
}
let output = checkAge('Adrian', 21);
console.log(output);