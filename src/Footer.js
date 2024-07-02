import React from 'react'

export const Footer = () => {
    const year= new Date();
  return (
    <div className='Footer'>copyright &copy; {year.getFullYear()} </div>
  )
}
