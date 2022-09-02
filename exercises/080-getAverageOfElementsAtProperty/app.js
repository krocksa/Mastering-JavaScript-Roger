let obj = {
    key: [1,2,3,4]
  };
// Write your function here
function getAverageOfElementsAtProperty(obj,key) {
    let prom = 0;

        if (obj[key].length == 0 || obj[key] == undefined && typeof obj[key] == 'object' ) {
            return 0;
        }
        else{
        let sum = obj[key].reduce((a,b)=> {
            return a+b
        })
        prom = sum/obj[key].length
        return prom
     }
}
console.log(getAverageOfElementsAtProperty(obj,'key'));