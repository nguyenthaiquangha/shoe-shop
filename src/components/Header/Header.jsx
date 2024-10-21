// import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/slide/user';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const cart = useSelector(state => state.cartSlice.item);
    //login & logout
    const user = JSON.parse(localStorage.getItem('user'))
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    };


    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity
        });
        setTotalQuantity(total)
    }, [cart])
    return (
        <>
            {/* header */}
            <header>
                {/* nav */}
                <div className="nav container">
                    <a href="/" className="logo">
                        Ecommerce
                    </a>
                    <div>
                        {

                            user ? <><Link style={{ color: 'black', fontSize: '1.4rem', marginRight: '1rem' }} to={`/user`}><i>Hello!</i> <strong>{user.username}</strong></Link><input type="submit" className='btn' value='Logout' onClick={handleLogout} /> </> :

                                <>
                                    <Link style={{ color: 'black', fontSize: '1.4rem', marginRight: '1rem' }} to={`/login`}><i>Login</i></Link>
                                    <Link style={{ color: 'black', fontSize: '1.4rem', marginRight: '1rem' }} to={`/register`}>
                                        <i>Register</i>
                                    </Link>
                                </>
                        }
                        <Link to={'/cart'}>
                            <i className="fa-solid fa-cart-shopping" id="icon-cart" >
                                <p className="icon-cart-quantity" style={{fontSize: '0.7rem'}}>{totalQuantity}</p>
                            </i>
                        </Link>

                    </div>

                </div>
            </header>
        </>
    )
}
