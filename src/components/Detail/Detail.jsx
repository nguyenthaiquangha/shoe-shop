// import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getProductByAction} from '../../redux/slide/listProducts'
import {ProductDetail} from '../ProductDetail/ProductDetail'
export   const Detail = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const getProductByid = async(id)=> {
        try {
            const action = getProductByAction(id);
            dispatch(action)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getProductByid(param.id)
    },[param.id])
  return (
    <div className='container'>
        <ProductDetail />
    </div>
  )
}
export default Detail;
