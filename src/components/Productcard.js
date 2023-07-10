import React from 'react'
import { useNavigate } from 'react-router'

export default function Productcard(props) {
  const navigate = useNavigate();
  return (
    <div className='card m-2 cursor-pointer' style={{width :300}} role='button' onClick={() => navigate(`/Product/${props.id}`)}>
        <div className='mt-2'>
            <img src={props.thumbnail}
             height={150} 
             width={180} 
             alt={props.title} 
             className="border"
              />
        </div>
        <div className='card-body'>
          <h4 className='card-title'>{props.title}</h4>
          <h5 className='mt-2'>price: {`$${props.price}`}</h5>
          <h5 className='mt-2'>Discount: {props.discountPercentage}%</h5>
          <h5 className='mt-2'>Rating: {props.rating}</h5>
          <div className='mt-4'>
            {props.stock > 0 ? <button className='btn btn-success'>Available</button> : <button className= 'btn btn-outline-danger' >Out of stock</button>}
          </div>
        </div>
    </div>
  )
}
