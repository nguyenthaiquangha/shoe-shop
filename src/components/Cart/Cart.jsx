import React from 'react'
import './cart.scss'
import { Header } from '../Header/Header'
import {  useSelector } from 'react-redux'

import { CartItem } from './../Cart/CartItem'
export const Cart = () => {
    const cart = useSelector(state => state.cartSlice.item);
    return (
        <div className='container'>
            <Header />
            <div>
                <div className="shopping-cart">
                    {/* Title */}
                    <div className="title">Shopping Bag</div>
                    {/* item cart */}
                    {
                        cart.map((item,key) =>   <CartItem data={item} key={key}/>)
                    }
                    <div>
                       <button className='btn'> Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Cart;
