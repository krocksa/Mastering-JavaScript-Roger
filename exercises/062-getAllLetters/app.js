function getAllLetters(str) {
    // your code here
    arr=[];
    for(i=0;i<str.length;i++){
        arr.push(str[i])
    }
    return arr
}
console.log(getAllLetters('Radagast'));