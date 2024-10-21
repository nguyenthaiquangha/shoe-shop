import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slide/cart';
// import '../../index.scss'
export const CartItem = (props) => {
    const { item } = props;;

    const cart = useSelector((state) => state.cartSlice.item)
    const dipatch = useDispatch();
    const handleAddtoCart = () => {
        dipatch(addToCart({
            productId: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: 1,
        }));
        
    }
    return (
        <div>
            <div className="product-box">
                <Link to={`detail/${item.id}`} style={{ color: "#000", }}>
                    <img src={item.image} alt="" className="product-img" />
                    <h3 className="product-title">{item.name}</h3>
                    <div className="product-content">
                        <span className="price">{item.price}$</span>
                    </div>
                </Link>
                <i className="fa-solid fa-cart-shopping add-to-cart" onClick={handleAddtoCart} />
            </div>

        </div>
    )
}
