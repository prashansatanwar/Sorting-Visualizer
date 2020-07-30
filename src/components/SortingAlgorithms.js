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

export const selectionSort = array => {
    const animations = [];
    
    let min = 0;

    for(let i = 0; i<array.length; i++){
        min = i;
        for(let j = i+1; j<array.length; j++){
            animations.push([j,j]);
            animations.push([j,j]);

            animations.push([[i,array[i]],[i,array[i]]]);
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

function partition(array, start, end, animations){
    let piv = array[start];
    let i = start+1;

    for(let j = i; j<=end; j++){
        if(array[j]<piv){
            animations.push([i,j]);
            animations.push([i,j]);
            animations.push([[i,array[j]],[j,array[i]]]);
            
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
    }
    
    animations.push([i-1,start]);
    animations.push([i-1,start]);
    animations.push([[start,array[i-1]],[i-1,array[start]]]);

    const temp = array[i-1];
    array[i-1] = array[start];
    array[start] = temp;

    return i-1;

}

function quickSortHelper(array, start, end, animations){
    if(start<end){
        let piv_pos = partition(array,start,end,animations);
        quickSortHelper(array,start,piv_pos,animations);
        quickSortHelper(array,piv_pos+1,end,animations);
    }
}
export const quickSort = array => {
    const animations = [];

    quickSortHelper(array, 0, array.length-1, animations);

    return animations;


}