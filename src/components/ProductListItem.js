import React from 'react'

export default function ProductListItem(props) {

    return (
        <div className=' m-4 d-flex align-items-center justify-content-center'>
            <div className='mt-2'>
                <img src={props.thumbnail}
                    height={150}
                    width={180}
                    alt={props.title}
                    className="border me-4"
                />
            </div>

            <h4 className='card-title me-4'>{props.title}</h4>
            <h5 className='mt-2 me-4'>price: {`$${props.price}`}</h5>
            <h5 className='mt-2 me-4'>Discount: {props.discountPercentage}%</h5>
            <h5 className='mt-2 me-4'>Rating: {props.rating}</h5>
            <button className='btn btn-danger ms-3'onClick={props.incrementItem}>+</button>
            <span className='ms-3'> Quantity:{props.count} </span>
            <button className='btn btn-danger ms-3'onClick={props.decrementItem} >-</button>
            <button className='btn btn-danger ms-3'onClick={props.removeItem} >Remove</button>
        </div>

    )
}
