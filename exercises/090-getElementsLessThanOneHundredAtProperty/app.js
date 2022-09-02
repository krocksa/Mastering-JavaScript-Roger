// Write your function here
let obj = {
    key: [1000, 20, 50, 500]
  };
// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];
    let emptyArr = [];
    for (prop in obj) {
        key = obj[prop]
        if (typeof key == 'object') {
            for (const i of key) {
                if (key.length == 0) {
                    return emptyArr;
                }
                else if (i < 100) {
                    arr.push(i)
                }
            }
            return arr
        }
    }
}
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);