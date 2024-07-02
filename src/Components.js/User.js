import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>user profile page</h1>
        <p>user ID is <b>{id}</b></p>
    </div>
  )
}
 