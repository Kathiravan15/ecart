import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Productlist } from '../data/Productlist';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = Productlist.find(
    (element) => element.id === parseInt(params.id)
  );
  const [alert, setAlert] = useState(false);
  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000)
    dispatch(addItem(props))
  }

  return (
    <div className='card m-2'>
      {alert && <span className='alert alert-success'>Item add to cart</span>}
      <div className='mt-2'>
        <img src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="border"
        />
      </div>
      <div className=' m-3 card-body'>
        <h4 className='card-title'>{props.title}</h4>
        <h5 className='mt-2'>price: {`$${props.price}`}</h5>
        <h5 className='mt-2'>Discount: {props.discountPercentage}%</h5>
        <h5 className='mt-2'>Rating: {props.rating}</h5>
        <div className='mt-4'>
          {props.stock > 0 ? (
            <>
              <button className='btn btn-success'
                onClick={() => navigate(`/checkout/${props.id}`)}>
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button
                  className="ms-3 btn btn-outline-warning"
                  onClick={() => navigate('/cart')}
                >
                  Go to cart
                </button>
              ) : (
                <button className='ms-4 btn btn-success ' onClick={addToCart} >
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className='btn btn-outline-danger' >Out of stock</button>
          )}
        </div>
      </div>
    </div>
  )

}
