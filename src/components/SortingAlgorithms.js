function merge(array, start, mid, end, auxArray, animations){
    let p = start;
    let q = mid+1;
    let ind = start;

    while(p<=mid && q<=end){
        animations.push([p,q]);
        animations.push([p,q]);

        if(auxArray[p]<auxArray[q]){
            animations.push([ind,auxArray[p]]);
            array[ind++] = auxArray[p++];
        }
        else{
            animations.push([ind,auxArray[q]]);
            array[ind++] = auxArray[q++];
        }
    }

    while(p<=mid){
        animations.push([p,q-1]);
        animations.push([p,q-1]);
        animations.push([ind,auxArray[p]]);
        array[ind++] = auxArray[p++];
    }

    while(q<=end){
        animations.push([p-1,q]);
        animations.push([p-1,q]);
        animations.push([ind,auxArray[q]]);
        array[ind++] = auxArray[q++];
    }

    console.log(array+" "+start+" "+mid);

}

function mergeSortHelper(array, start, end, auxArray, animations){
    if(start<end){
        const mid = Math.floor((end+start)/2);

        mergeSortHelper(auxArray, start, mid, array, animations);
        mergeSortHelper(auxArray, mid+1, end, array, animations);

        merge(array, start, mid, end, auxArray, animations);
    }
};

export const mergeSort = array => {
    const animations = [];

    if(array.length <= 1){
        return array;
    }
    
    const auxArray = array.slice();

    mergeSortHelper(array, 0, array.length -1, auxArray, animations);

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
