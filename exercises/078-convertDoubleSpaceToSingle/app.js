function convertDoubleSpaceToSingle(str) {
    // your code here
   let remov = str.split('  ');
   let res = remov.join(' ')
   return res

}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"