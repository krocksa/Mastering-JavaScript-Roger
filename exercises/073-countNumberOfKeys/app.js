let obj = {
    d:1
  };

function countNumberOfKeys(obj) {
    // your code here
let num = 0
for (const prop in obj) {
    num += 1
}
return num
}

let output = countNumberOfKeys(obj);
console.log(output);