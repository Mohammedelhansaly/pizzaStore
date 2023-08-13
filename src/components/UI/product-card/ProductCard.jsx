import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/product-card.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const ProductCard = (props) => {

    const { id, title, image01, price } = props.item

    const dispatch = useDispatch()


    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    return (
        <>
            <div className="product__item">
                <div className="product__img">
                    <img src={image01} alt="" className='img' />
                </div>
                <div className="product__content">
                    <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                    <div className='ratt'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                </div>
                    <div className="buy">
                        <span className='product__price'>${price}</span>
                        <button className='addCart-btn' onClick={addToCart}><i className="ri-shopping-cart-line"></i> <span>Add To Cart</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
