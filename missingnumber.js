let arr = [1,2,3,5];
let res = [];
for(let i = 1; i < arr.length + 1; i++){
    if(!arr.includes(i)){
        res.push(i)
    }
}
console.log(res)