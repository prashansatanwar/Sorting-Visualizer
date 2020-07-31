import React from 'react';
import {Button} from 'reactstrap';
import './SortingVisualizer.css';
import {mergeSort,bubbleSort,insertionSort,selectionSort,quickSort} from './SortingAlgorithms.js';


const PRIMARY_COLOR = 'linear-gradient(#0A2342, #A3EFF5)';
const SECONDARY_COLOR = 'linear-gradient(red, red)';

class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            animation_speed: 3,
            number_of_array_bars: 620,
            width: 2,
        };

    }

    componentDidMount() {
        this.resetArray();
    }
    
    resetArray(){
        // console.log(this.state.width+" "+this.state.number_of_array_bars);
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }

        const array = [];
        for(let i = 0; i<this.state.number_of_array_bars; i++){
            array.push(randomIntFromInterval(10,1000)*0.6);

            if(i == (this.state.number_of_array_bars-1)){
                for(let x = 0; x<button.length; x++){
                    button[x].disabled = !button[x].disabled;
                }
            }
        }
        this.setState({array: array});
    }

    mergeSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }
        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;

        const array = this.state.array.slice();
        const animations = mergeSort(array);

        for(let i = 0; i<animations.length; i++){
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
                }, i*this.state.animation_speed);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0]].style.height = `${animations[i][1]}px`;
                    arrayBars[animations[i][0]].style.marginBottom = `${1000-animations[i][1]}px`;
                    
                if(i==animations.length-1){
                    for(let x = 0; x<button.length; x++){
                        button[x].disabled = !button[x].disabled;
                    }
                    document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
                    document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
                    document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;
                }

                },i*this.state.animation_speed);
            }
        }

    }

    selectionSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }
        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;

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
                },i* this.state.animation_speed);
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
                        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
                        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
                        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;
                    }
                
                }, i*this.state.animation_speed);
            }
        }
    }

    insertionSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }
        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;

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
                },i* this.state.animation_speed);
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
                        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
                        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
                        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;
                    }
                
                }, i*this.state.animation_speed);
            }
        }

    }

    bubbleSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }
        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;

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
                },i* this.state.animation_speed);
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
                        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
                        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
                        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;
                    }
                
                }, i*this.state.animation_speed);
            }
        }
    }

    quickSort(){
        const button = document.getElementsByClassName('sort-button');
        for(let x = 0; x<button.length; x++){
            button[x].disabled = !button[x].disabled;
        }
        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;

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
                },i* this.state.animation_speed);
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
                        document.getElementsByClassName('reset-button')[0].disabled = !document.getElementsByClassName('reset-button')[0].disabled;
                        document.getElementsByClassName('slider')[0].disabled = !document.getElementsByClassName('slider')[0].disabled;
                        document.getElementsByClassName('slider')[1].disabled = !document.getElementsByClassName('slider')[1].disabled;
                    }
                
                }, i*this.state.animation_speed);
            }
        }
    }

    

    render(){
        const {array} = this.state;
        return (
            <div fluid className='array-container'>
                <div className = 'toolbar'>
                    <Button disabled = {false} onClick = {()=>window.location.reload(false)} className = 'reset'>Reset</Button>

                    Number of bars: 
                    <input type ="range" min="10" max="620" className = "slider" value = {this.state.number_of_array_bars} onChange = {(event)=>
                        {this.setState({number_of_array_bars: event.target.value, width: ((1240/this.state.number_of_array_bars)+0.5)|0});
                        this.resetArray();
                    }
                        
                        }>
                    </input>
                
                    Speed: 
                    <input type ="range" min="1" max="10" className = "slider" value = {this.animation_speed} onChange = {(event)=>
                        this.setState({animation_speed: 10-event.target.value})
                        
                        }>
                    </input>
                    
                    <div className="btns">
                        <Button disabled = {false} onClick = {()=>this.resetArray()} className = 'reset-button'>Generate new array</Button>
                        <Button disabled = {false} onClick = {()=>this.mergeSort()} className = 'sort-button'>Merge Sort</Button>
                        <Button disabled = {false} onClick = {()=>this.quickSort()} className = 'sort-button'>Quick Sort</Button>
                        <Button disabled = {false} onClick = {()=>this.selectionSort()} className = 'sort-button'>Selection Sort</Button>
                        <Button disabled = {false} onClick = {()=>this.insertionSort()} className = 'sort-button'>Insertion Sort</Button>
                        <Button disabled = {false} onClick = {()=>this.bubbleSort()} className = 'sort-button'>Bubble Sort</Button>
                    </div>
                    

                </div>
                <div className = 'array-container'>
                    {array.map((value, idx)=>(
                        <div className = "array-bar" 
                            key = {idx} 
                            style={{
                                height: `${value}px`, 
                                width: this.state.width, 
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
