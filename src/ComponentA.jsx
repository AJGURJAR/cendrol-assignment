import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
   var cendrol = 2
  return (
    <div className='ComponentA'>
      <ComponentB cendrol={cendrol} />
    </div>
  )
}

export default ComponentA
