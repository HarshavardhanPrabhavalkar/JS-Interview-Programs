let arr = [2,4,1,7,5];
let maxval = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < maxval){
        maxval = arr[i]
    }
}
console.log(maxval)