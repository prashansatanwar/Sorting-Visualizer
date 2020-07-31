import React from 'react';
import {Button} from 'reactstrap';
import './SortingVisualizer.css';
import {mergeSort,bubbleSort,insertionSort,selectionSort,quickSort} from './SortingAlgorithms.js';

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 620;
const WIDTH = 2;
const PRIMARY_COLOR = 'linear-gradient(#0A2342, #A3EFF5)';
const SECONDARY_COLOR = 'linear-gradient(red, red)';

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
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = [];
        for(let i = 0; i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(10,1000)*0.6);

            if(i == (NUMBER_OF_ARRAY_BARS-1)){
                for(let x = 0; x<button.length; x++){
                    button[x].disabled = !button[x].disabled;
                }
            }
        }
        this.setState({array});
    }

    mergeSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = this.state.array.slice();
        const animations = mergeSort(array);

        for(let i = 0; i<animations.length; i++){
            // if(document.getElementsByClassName('reset-button')[0].disabled){

            // }
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1, bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                    sty1.backgroundImage = color;
                    sty2.backgroundImage = color;
                }, i*ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0]].style.height = `${animations[i][1]}px`;
                    arrayBars[animations[i][0]].style.marginBottom = `${1000-animations[i][1]}px`;
                    
                if(i==animations.length-1){
                    for(let x = 0; x<button.length; x++){
                        button[x].disabled = !button[x].disabled;
                    }
                }

                },i*ANIMATION_SPEED_MS);
            }
        }

    }

    selectionSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = this.state.array.slice();
        const animations = selectionSort(this.state.array);
    

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1,bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    sty1.backgroundImage = color;
                    sty2.backgroundImage = color;
                },i* ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][0][1]}px`;
                    arrayBars[animations[i][0][0]].style.marginBottom = `${1000-animations[i][0][1]}px`;

                    arrayBars[animations[i][1][0]].style.height = `${animations[i][1][1]}px`;
                    arrayBars[animations[i][1][0]].style.marginBottom = `${1000-animations[i][1][1]}px`;
                
                    if(i==animations.length-1){
                        for(let x = 0; x<button.length; x++){
                            button[x].disabled = !button[x].disabled;
                        }
                    }
                
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = this.state.array.slice();
        const animations = insertionSort(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1,bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    sty1.backgroundImage = color;
                    sty2.backgroundImage = color;
                },i* ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][0][1]}px`;
                    arrayBars[animations[i][0][0]].style.marginBottom = `${1000-animations[i][0][1]}px`;

                    arrayBars[animations[i][1][0]].style.height = `${animations[i][1][1]}px`;
                    arrayBars[animations[i][1][0]].style.marginBottom = `${1000-animations[i][1][1]}px`;
                
                    if(i==animations.length-1){
                        for(let x = 0; x<button.length; x++){
                            button[x].disabled = !button[x].disabled;
                        }
                    }
                
                }, i*ANIMATION_SPEED_MS);
            }
        }

    }

    bubbleSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = this.state.array.slice();
        const animations = bubbleSort(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1,bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    sty1.backgroundImage = color;
                    sty2.backgroundImage = color;
                },i* ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][0][1]}px`;
                    arrayBars[animations[i][0][0]].style.marginBottom = `${1000-animations[i][0][1]}px`;

                    arrayBars[animations[i][1][0]].style.height = `${animations[i][1][1]}px`;
                    arrayBars[animations[i][1][0]].style.marginBottom = `${1000-animations[i][1][1]}px`;
                
                    if(i==animations.length-1){
                        for(let x = 0; x<button.length; x++){
                            button[x].disabled = !button[x].disabled;
                        }
                    }
                
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = this.state.array.slice();
        const animations = quickSort(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1,bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    sty1.backgroundImage = color;
                    sty2.backgroundImage = color;
                },i* ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][0][1]}px`;
                    arrayBars[animations[i][0][0]].style.marginBottom = `${1000-animations[i][0][1]}px`;

                    arrayBars[animations[i][1][0]].style.height = `${animations[i][1][1]}px`;
                    arrayBars[animations[i][1][0]].style.marginBottom = `${1000-animations[i][1][1]}px`;
                
                    if(i==animations.length-1){
                        for(let x = 0; x<button.length; x++){
                            button[x].disabled = !button[x].disabled;
                        }
                    }
                
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }


    render(){
        const {array} = this.state;
        return (
            <div fluid className='array-container'>
                <div className = 'toolbar'>
                    <Button disabled = {false} onClick = {()=>this.resetArray()} className = 'reset_button'>Reset</Button>
                    <Button disabled = {false} onClick = {()=>this.mergeSort()} className = 'sort-button'>Merge Sort</Button>
                    <Button disabled = {false} onClick = {()=>this.quickSort()} className = 'sort-button'>Quick Sort</Button>
                    <Button disabled = {false} onClick = {()=>this.selectionSort()} className = 'sort-button'>Selection Sort</Button>
                    <Button disabled = {false} onClick = {()=>this.insertionSort()} className = 'sort-button'>Insertion Sort</Button>
                    <Button disabled = {false} onClick = {()=>this.bubbleSort()} className = 'sort-button'>Bubble Sort</Button>

                </div>
                <div className = 'array-container'>
                    {array.map((value, idx)=>(
                        <div className = "array-bar" 
                            key = {idx} 
                            style={{
                                height: `${value}px`, 
                                width: WIDTH, 
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
