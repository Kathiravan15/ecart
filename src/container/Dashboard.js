import React from 'react'
import { Productlist } from '../data/Productlist'
import Productcard from '../components/Productcard'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-4'>
      {Productlist.map((product)=> <Productcard {...product}  key={product.id}/>)}
    </div>
  )
  }