import React from 'react'
import  "./Item.css"
const Item = (props) => {
  return (
    <div className='item'>
       <img src={props.image} alt=''/>
       <p>{props.name}</p>  
       <div className='item-price'>
        <div className='item-price-new'>
            {props.new-price}
        </div>
        <div className='item-price-old'>
            {props.old-price}
        </div>

       </div>
    </div>
  )
}

export default Item