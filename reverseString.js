let str = "hello harsh";
let res = '';
let word = '';
for(let i = 0; i < str.length; i++){
    if(str[i] != ' '){
        word += str[i]
        // console.log(word)
    }   
    else{
        let rev = ''
        for(let j = word.length - 1; j >= 0; j--){
            rev += word[j];
            // console.log(rev)
        }
        res = rev + ' ';
        word = ''
    }
}
let lastword = ''
for(let k = word.length - 1; k >= 0; k--){
    lastword += word[k]
}
res += lastword
console.log(res)