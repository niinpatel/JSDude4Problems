function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];
    let len = arr.length;

    if (len < 2){
        return null;
    }

    if (secondLargest > largest){
        largest = arr[1];
        secondLargest = arr[0];
    }


    for (let i = 2; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i]>secondLargest){
            secondLargest = arr[i];
        }

    }

    return largest + secondLargest
}

secondLargest([1,4,2,4,6,4,5]);
