import React from 'react';
import {Button} from 'reactstrap';
import './SortingVisualizer.css';
import {mergeSort,bubbleSort} from './SortingAlgorithms.js';

const ANIMATION_SPEED_MS = 2;
const NUMBER_OF_ARRAY_BARS = 470;
const PRIMARY_COLOR = 'linear-gradient(#0A2342, #A3EFF5)';
// const SECONDARY_COLOR = 'red';

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
        for(let i = 0; i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(10,1000)*0.6);
        }

        this.setState({array});
    }

    mergeSort(){
        const animations = mergeSort(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(!isColorChange){
            //     const [bar1, bar2] = animations[i];
            //     const sty1 = arrayBars[bar1].style;
            //     const sty2 = arrayBars[bar2].style;

            //     const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            //setTimeout(() => {
            //         sty1.backgroundImage = color;
            //         sty2.backgroundImage = color;
            //     }, i*ANIMATION_SPEED_MS);
            // }
            // else{
                setTimeout(() => {
                    arrayBars[animations[i][0]].style.height = `${animations[i][1]}px`;
                    arrayBars[animations[i][0]].style.marginBottom = `${1000-animations[i][1]}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort(){

    }

    insertionSort(){

    }

    bubbleSort(){
        const sortedArray = bubbleSort(this.state.array);

        this.setState(sortedArray);
    }


    render(){
        const {array} = this.state;
        return (
            <div fluid className='array-container'>
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
                                height: `${value}px`, 
                                width: 3, 
                                marginLeft: 0.5, 
                                marginRight: 0.5, 
                                backgroundImage: PRIMARY_COLOR,
                                marginBottom: 1000-`${value}`
                            }}>
                                
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default SortingVisualizer;
