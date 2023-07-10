import React from 'react'
import Header from '../components/Header'
import { Routes , Route } from 'react-router'
import Dashboard from './Dashboard.js'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import Success from './Success'

export default function Home() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={< Dashboard/>} />
        <Route path='/Product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout/' >
            <Route path='' element={<Checkout/>} />
             <Route path=':id' element={<Checkout/>}/>
        </Route>    
        <Route path='/success' element={<Success/>}/>
    </Routes>
    </div>
  )
}
