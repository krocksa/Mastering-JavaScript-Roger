// Write your function here

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(array,objt) {
    let narr = [];
    let nobj = {}
    for (const i of array) {
        for (const prop in objt) {
            if (i === prop){
               nobj[prop] = objt[prop]
            }
        }
    } 
    return nobj
}

let output = select(arr, obj);
console.log(output);