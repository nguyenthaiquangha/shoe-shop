// import React from 'react'
// import { Link } from 'react-router-dom';
// import { ProductDetail } from '../ProductDetail/ProductDetail';
import ReactPaginate from 'react-paginate';
import { CartItem } from '../CartItem/CartItem';
export const Items = (props) => {
    const { listProducts } = props
    return (
        <>
            {
                Array.isArray(listProducts) && listProducts.map((item) => {
                    return <CartItem key={item.id} item={item} />
                })
            }
           
        </>
    )
}
