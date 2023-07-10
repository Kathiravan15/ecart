import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='p-3 bg-secondary'>
        <h3>E-cart</h3>
        <div className='row justify-content-center pt-2 pb-1'>
        <div className='col-sm-12 col-mt-6 col-lg-7 col-xl-5 d-flex' >
            <button className='btn btn-success me-4' onClick={ () =>navigate('/') }>Home</button>
            <input
                className='form-control'
                type='search'
                placeholder='search..'
                />
            <button className='btn btn-success ms-3' onClick={() =>navigate('/cart')}>Cart</button>
      </div>
    </div>
    </div>
  )
}
