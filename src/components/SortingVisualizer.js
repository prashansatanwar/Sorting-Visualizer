import React from 'react';
import {Button} from 'reactstrap';
import './SortingVisualizer.css';

class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }
    
    resetArray(){
        const array = [];
        for(let i = 0; i<100; i++){
            array.push(randomIntFromInterval(10,1000));
        }

        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){

    }

    insertionSort(){

    }

    bubbleSort(){
    }


    render(){
        const {array} = this.state;
        return (
            <>
                <div className = 'toolbar'>
                    <Button onClick = {()=>this.resetArray()} className = 'm-2'>Generate new array</Button>
                    <Button onClick = {()=>this.mergeSort()} className = 'm-2'>Merge Sort</Button>
                    <Button onClick = {()=>this.quickSort()} className = 'm-2'>Quick Sort</Button>
                    <Button onClick = {()=>this.insertionSort()} className = 'm-2'>Insertion Sort</Button>
                    <Button onClick = {()=>this.bubbleSort()} className = 'm-2'>Bubble Sort</Button>

                </div>
                <div className = 'array-container'>
                    {array.map((value, idx)=>(
                        <div className = "array-bar" 
                            key = {idx} 
                            style={{
                                height: `${value*0.6}px`, 
                                width: 4, 
                                marginLeft: 2, 
                                marginRight: 2, 
                                marginBottom:1000-`${value*0.6}`
                            }}>
                                
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default SortingVisualizer;
