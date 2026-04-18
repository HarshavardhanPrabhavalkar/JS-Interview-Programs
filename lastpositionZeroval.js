let arr = [2,4,0,1,0,8];
let res = [];
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    if(arr[i] != 0){
        res.push(arr[i])
    }
}

for(let j = 0; j < arr.length; j++){
    if(arr[j] == 0){
        res.push(arr[j])
    }
}
console.log(res)