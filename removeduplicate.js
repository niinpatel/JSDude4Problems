

function removeDuplicate(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
        if(!(newarr.includes(arr[i]))){
            newarr.push(arr[i]);
        }
    }

    return newarr;
}

arr = [1,3,4,4,3,3,3,1,1,1,3,2,2,5,1,6,7,4];

console.log(removeDuplicate(arr));



