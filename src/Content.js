import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa6";

export const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "practice coding"
    },

    {
      id: 2,
      checked: false,
      item: "practice cricket"
    },

    {
      id: 3,
      checked: true,
      item: "go to sleep"
    }
  ])
const handleCheck= (id) =>{
  const listitem = items.map((item) =>item.id===id?
{...item,checked:!item.checked} :item)
setItems(listitem)

}

const handledelete = (id) =>{
  const listitem =items.filter((item)=>item.id!==id)
  setItems(listitem)
}


  
  return (
    <div className='Content'>

{(items.length)?(
      <ul>
        {items.map((item) => (  

          <li className='item' key={item.id}>
            <input
             type='checkbox'
             onChange={()=>handleCheck(item.id)} 
             checked={item.checked}></input>
            <label 
            style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleCheck(item.id)} >
              {item.item}
              </label>
            <FaTrash
              role='button'
              onClick={()=>handledelete(item.id)}
              tabIndex={0}
            />
          </li>
        ))}
      </ul>
):
  <p style={{marginTop:'2rem',alignItems:'center'}}>your list is empty</p>

}


    </div>
  ) 
}
