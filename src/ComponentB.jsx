import React, {useState} from 'react'
import './ComponentB.css'

const ComponentB = ({cendrol}) => {
    const [ncendrol, setncendrol] = useState('')
    let handleClick = () => {
        setncendrol(cendrol + 10)
    }
  return (
    <div className='ComponentB'>
      <p>{cendrol}</p>
      <button onClick={handleClick}>Click to Show new Value</button>
      <p>{ncendrol}</p>
    </div>
  )
}

export default ComponentB
