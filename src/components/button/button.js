import React, { useState } from 'react';
import './Button.css';

const Button = () => {
    const [count, setCount] = useState({ counter: 0 });
    const add1ToCounter = () => {
        const newCounterValue = count.counter + 1;
        setCount({ counter: newCounterValue });
    }
    return (
        <div>
            {/* <p>This is getting counter  for each button: {count.counter}</p> */}
            <button className='alr-button' onClick={
                add1ToCounter
            } >Submit</button>
        </div >
    )
};

export default Button;