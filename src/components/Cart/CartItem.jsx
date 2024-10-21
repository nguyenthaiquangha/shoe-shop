import React from 'react'
import { changQuanTity } from '../../redux/slide/cart';
import { useDispatch } from 'react-redux';

export const CartItem = (props) => {
    const { productId, quantity, image, name, price } = props.data;
    const dipatch = useDispatch();
    const handleMinusQuantity = () => {
        dipatch(changQuanTity({
            productId: productId,
            quantity: quantity - 1,
        }))
    }
    const handlePlusQuantity = () => {
        dipatch(changQuanTity({
            productId: productId,
            quantity: quantity + 1,
        }));

    }
    return (
        <div>
            <>
                <div className="item">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="name">
                        <p>{name}</p>
                    </div>
                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button" onClick={handleMinusQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className="minus-btn" type="button" name="button" onClick={handlePlusQuantity}>+</button>
                    </div>
                    <div className="total-price">${price * quantity}</div>
                </div>
            </>
        </div>
    )
}
