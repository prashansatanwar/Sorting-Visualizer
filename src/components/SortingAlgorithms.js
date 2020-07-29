function merge(array, start, mid, end){
    let p = start;
    let q = mid+1;

    const auxArray = array;

    for(let i = start; i<=end; i++){
        if(p>mid){
            auxArray.push(array[q++]);
        }
        else if(q>end){
            auxArray.push(array[p++]);
        }
        else if(array[p]<array[q]){

            auxArray.push(array[p++]);
        }
        else{
            auxArray.push(array[q++]);
        }
    }

    for(let i = 0; i<auxArray.length; i++){
        array[start+i] = auxArray[i];
    }

}

function mergeSortHelper(array, start, end){
    if(start<end){
        let mid = Math.floor((end+start)/2);

        mergeSortHelper(array, start, mid);
        mergeSortHelper(array, mid+1, end);

        merge(array, start, mid, end);
    }
};

export const mergeSort = array => {
    const animations = [];

    if(array.length <= 1){
        return array;
    }

    mergeSortHelper(array, 0, array.length-1);

    return animations;
};


export const bubbleSort = array => {
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
};
