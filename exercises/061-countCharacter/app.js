function countCharacter(str, char) {
    // your code here
let string = str.toLocaleLowerCase()
let arr = []
for (let i = 0; i <string.length; i++) {
    if (string[i] != ' ') {
        arr.push(str[i])
    };
}
arr.sort()
let cont = 1;
let letuni = [];
let arrcont = [];
for (let i = 0; i <= arr.length; i++) {
    char = arr[i]
    if (char === arr[i + 1]) {
        cont +=1
    }
    else{
        letuni.push(arr[i]);
        arrcont.push(cont);
        cont = 1;
    }
}
let max = Math.max(...arrcont);
return max
}
console.log(countCharacter('I am a hacker','i'));