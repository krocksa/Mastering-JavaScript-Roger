function isOldEnoughToVote(age) {
  // your code here
  if (age < 18) {
    return false
  } else {
    return true
  }
}
console.log(isOldEnoughToVote(16))
