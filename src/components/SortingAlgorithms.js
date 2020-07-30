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
    const animations = [];
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([[j,array[j+1]],[j+1,array[j]]]);
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return animations;
};

export const insertionSort = array => {
    const animations = [];

    for(let i = 0; i<array.length; i++){
        for(let j = i; j>0; j--){
            if(array[j]>array[j-1]){
                break;
            }
            animations.push([j,j-1]);
            animations.push([j,j-1]);
            animations.push([[j,array[j-1]],[j-1,array[j]]]);
            const temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
        }
    }

    return animations;
};

export const selectionSort = array =>{
    const animations = [];
    
    let min = 0;

    for(let i = 0; i<array.length; i++){
        min = i;
        for(let j = i+1; j<array.length; j++){
            if(array[j]<array[min]){
                min = j;
            }
        }

        animations.push([i,min]);
        animations.push([i,min]);

        animations.push([[min,array[i]],[i,array[min]]]);

        const temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }

    return animations;
};