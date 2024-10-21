import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './category.scss'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setListCates } from '../../redux/slide/listCategory'
import { setCurrentPages } from '../../redux/slide/listProducts'
// import { Cate } from './Cate'
// import { getProductByIdApi } from '../../services/products.service'

export const Category = () => {

    const { listCates } = useSelector((state) => state.CateSlice);
    const dispatch = useDispatch();
    const getCates = async () => {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory');
        const action = setListCates(res.data.content)
        dispatch(action);
    }
    useEffect(() => {
        getCates()
    }, [])


    const handleOnclickActive = (e) => {
        var curr = e.target.textContent;
        var elem = document.querySelectorAll('.nav_link');      
        for (var i = 0; i < elem.length; i++) {
            if (elem[i].textContent === curr) {
                elem[i].classList.add('active');
            } else {
                elem[i].classList.remove('active');
            }
        }
        dispatch(setCurrentPages(1));
    }
    return (
        <div style={{ float: 'left', position: 'fixed' }} >
            <h5 className='m-4'>Category</h5>
            {
                Array.isArray(listCates) && listCates.map((item,index) => {
                    return <>
                        <Link className='p-1 m-4 btn btn-light d-block nav_link' to={`/category/${item.id}`} key={index} onClick={handleOnclickActive} >{item.category}</Link>
                    </>
                })
            }
            {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id='valueInput'
                        onChange={(e) => handleOnChangValueInput(e.target.value)}
                    /> */}
            {/* <button type="submit" className='btn btn-light'>search</button> */}
        </div>
    )
}
