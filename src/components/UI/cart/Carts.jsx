import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import '../../../styles/shopping-cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
import emptyImg from '../../../assets/images/emptyCart.png'

const Carts = () => {
    const cart = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount);

    console.log(cart)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(cartUiActions.toggle())
    }
    return (
        <>
            <div className="cart__container">
                <div className="cart">
                    <div className="cart__close">
                        <span onClick={toggle}><i className="ri-close-line"></i></span>
                    </div>
                    <div className="cart_item-list">
                        {
                            cart.length === 0 ? <div className='empty-cart'>
                                <h6 className='empty__msg'>No Item Added To The Cart</h6>
                            </div>
                                : cart.map((item, index) => (
                                    <CartItem item={item} index={index} />
                                ))
                        }
                    </div>
                    <div className="cart__bottom">
                        <h6>Subtotal: <span>${totalAmount}</span></h6>
                        <button onClick={toggle}><Link to="/checkout">Checkout</Link></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Carts
