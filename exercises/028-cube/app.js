// Write your function here
function cube(num){
    let aux = 1;
    for(let i=0; i<3;i++){
        aux *= num
    }
    return aux
}
console.log(cube(3));