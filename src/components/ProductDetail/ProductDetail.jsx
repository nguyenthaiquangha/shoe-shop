// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './productDetail.scss'
import { useState } from 'react';
import { addToCart } from '../../redux/slide/cart';
import { Comment } from '../Comment/Comment';


export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const { productDetail } = useSelector((state) => state.ProductSlice);

  const dipatch = useDispatch()
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  };
  const handlePlusuantity = () => {
    setQuantity(quantity + 1)
  }
  const handleAddToCart = () => {
    dipatch(addToCart({
      productId: productDetail.id,
      name: productDetail.name,
      image: productDetail.image,
      price: productDetail.price,
      quantity: quantity,
    }))
  }
  return (
    <div className='shop container' >
      <div className='productDetail'>
        <div className='productDetail-img'><img src={productDetail.image} alt="" /></div>
        <div className='productDetail-content'>
          <strong>Name: {productDetail.name}</strong>
          <p>price: {productDetail.price}</p>
          <p>Des: {productDetail.shortDescription}</p>
          <div>
            <button className="plus-btn" type='button' onClick={handleMinusQuantity}>-</button>
            <span className='m-3' style={{ width: '20px', display: 'inline-block', textAlign: 'center' }}>{quantity}</span>
            <button className="minus-btn " type='button' onClick={handlePlusuantity}>+</button>
          </div>
          <button type='button' className='btn-addtocart' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
      <Comment idpro={productDetail.id}/>
    </div>
  )
}
