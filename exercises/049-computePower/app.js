function computePower(num, exponent) {
  // your code here
  aux = 1;
  for(i=0;i <exponent;i++){
    aux*= num
  }
  return aux
}
console.log(computePower(2,3));
