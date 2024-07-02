import React from 'react'

export const Header = (props) => {


  return (
    <div className='Header' >
       <h1>{props.title}</h1> 
    </div>
  )
}

Header.defaultProps = {
  title:"To do list"
}
