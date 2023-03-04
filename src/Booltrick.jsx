import React, {useState} from 'react'
import './Booltrick.css'

const Booltrick = () => {
    const [active, setActive] = useState(false)
    let handleClick = () => {
        setActive(!active)
    }
  return (
    <div className='Booltrick'>
      <button onClick={handleClick} style={{backgroundColor: active ? "red" : "blue"}}>Bool Button Color Change</button>
    </div>
  )
}

export default Booltrick
