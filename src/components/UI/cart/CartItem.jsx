import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
import '../../../styles/cart-item.css'

const CartItem = ({ item }) => {
    const { id, title, price, image01, quantity, totalPrice } = item
    const dispatch = useDispatch()
    const increaitem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01,
        }))
    }
    const decreamitem = () => {
        dispatch(cartActions.removeItem(id))
    }
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <>
            <div className="listGroup">
                <div className="cart__item-info  d-flex gap-2">
                    <img src={image01} alt="" />
                    <div className="cart__product-info ">
                        <div>
                            <h6 className='cart__product-title'>{title}</h6>
                            <p className='cart__product-price'>{quantity}x <span>${totalPrice}</span></p>
                            <div className='cart__product-quantite'>
                                <span className='increment' onClick={increaitem}><i className="ri-add-line"></i></span>
                                <span className='quantite'>{quantity}</span>
                                <span className='decrement' onClick={decreamitem}><i className="ri-subtract-line"></i></span>
                            </div>
                        </div>
                        <span className='delete__btn' onClick={deleteItem}><i className="ri-close-line"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
