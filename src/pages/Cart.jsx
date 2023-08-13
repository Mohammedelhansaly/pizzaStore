import React from "react";

import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import Headtitle from '../components/Headtitle/headtitle'
import { useEffect } from "react";
import Newsletter from "../components/UI/newslettre/Newsletter";

const Cart = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <Headtitle />
      <section className="Cart">
        <div className="container">
          <div className="col">

            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ?
                  <tr>
                    <td colSpan={5} className="empty">Your cart is empty</td>
                  </tr>
                  :
                  cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
              </tbody>
            </table>


            <div className="check">
              <h6>
                Subtotal: $
                <span className="cart__subtotal">{totalAmount}</span>
              </h6>
              <p>Taxes and shipping will calculate at checkout</p>
              <div className="cart__page-btn">
                <button className="addTOCart__btn">
                  <Link to="/foods">Continue Shopping</Link>
                </button>
                <button className="addTOCart__btn">
                  <Link to="/checkout">Proceed to checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter/>
      
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className=" cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td >{title}</td>
      <td >${price}</td>
      <td >{quantity}px</td>
      <td >
        <button className="cart__item-del" >
          <i className="ri-delete-bin-line" onClick={deleteItem}></i>
        </button>
      </td>
    </tr>
  );
};

export default Cart;

