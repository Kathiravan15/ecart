import React, { useState } from 'react'
import {useSelector } from 'react-redux'
import ProductListItem from '../components/ProductListItem'
import { useNavigate, useParams } from 'react-router';
import { Productlist } from '../data/Productlist';

export default function Checkout() {
    const params = useParams();
    const list = useSelector((state) => state.cart.list);
    const [state, setstate] = useState(
        params.id
            ? [{
                ...Productlist.find((element) => element.id === parseInt(params.id)),
                Count: 1,
            }
            ]
            : list
    );
     const navigate = useNavigate();
     const incrementItem = (item) => {
        const index= state.findIndex(
            (Product) => Product.id === item.id
        );
        
        setstate((state) => [
            ...state.slice(0, index),
            { ...item, count: item.count + 1 },
            ...state.slice(index + 1)
        ])
    };

    const decrementItem = (item) => {
        if (item.count === 1) {
            removeItemFromCart(item);
        }
        else {
            const index= state.findIndex(
                (Product) => Product.id === item.id
            );
            
            setstate((state) => [
                ...state.slice(0, index),
                { ...item, count: item.count - 1 },
                ...state.slice(index + 1)
            ])
        };
        }

    const removeItemFromCart = (item) => {
        const index= state.findIndex(
            (Product) => Product.id === item.id
        );
        
        setstate((state) => [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ])
    };
     return (
        <>
            {state.length > 0 ? (
                <>
                    {state.map((item) => (
                        <ProductListItem
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => removeItemFromCart(item)}
                        />
                    ))}
                    <button className='btn btn-success' onClick={() => navigate('/Success')}>
                        Place order
                    </button>
                </>
            ) : (<h3>No item in the Checkout</h3>
            )}
        </>
    );
           
                    }



