import React from 'react';
import './counter.css';



function Counter(props){
return(
    <div className="main">
        <div className="counter">
            <div id="color" onClick={() => {props.Increase(props.counter)}}>
                {props.counter}
            </div>
               
            <button onClick={() => {props.Increase(props.counter)}}><i class="fas fa-plus"></i></button>
            <button onClick={() => {props.Reset(props.counter)}}><i class="fas fa-retweet"></i></button>
            <button onClick={() => {props.Decrease(props.counter)}}><i class="fas fa-minus"></i></button>    
        </div>
    </div>
)}

export default Counter;