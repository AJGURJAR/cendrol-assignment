import React, {useState, useRef} from 'react'
import './Counter.css'

const Counter = () => {
    const[count, setCount] = useState(1)

    const sourceElementRef = useRef(null);
    const targetElementRef = useRef(null);

    let incrementCount = () => {
        setCount(count + 1)

        const sourceElement = sourceElementRef.current;
        const computedStyle = getComputedStyle(sourceElement);
        const backgroundColor = computedStyle.backgroundColor;

   
        const targetElement = targetElementRef.current;
        targetElement.style.backgroundColor = backgroundColor;
    }

  return (
    <div className='Counter'>
        <div className='Circle-enclosure'>
            <div className="Circle" ref={targetElementRef}>
                <h1>0{count}</h1>
                <p>Click to increase counter</p>
            </div>
        </div>
        <button className="Button-color" ref={sourceElementRef} onClick={incrementCount}> Change Color </button>        
    </div>
  )
}

export default Counter
