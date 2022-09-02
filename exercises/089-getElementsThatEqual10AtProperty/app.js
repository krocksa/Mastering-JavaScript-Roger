let obj = {
    key: []
  };
// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    let arr = [];
    let emptyArr = [];
    for (prop in obj) {
        key = obj[prop]
        if (typeof key == 'object') {
            for (const i of key) {
                if (key.length == 0) {
                    return emptyArr;
                }
                else if (i == 10) {
                    arr.push(i)
                }
            }
            return arr
        }
    }
}
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);