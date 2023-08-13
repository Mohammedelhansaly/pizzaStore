import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { Link, useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";
import Headtitle from "../components/Headtitle/headtitle";
import Newsletter from "../components/UI/newslettre/Newsletter";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">

      <section>
        <div className="container">
          <div className="single-product">
            <div className="row1">
              <div className="col-6">
                <div className="product-image">
                  <div className="product-image-main">
                    <img src={previewImg} alt="" id="product-main-image" />
                  </div>
                  <div className="product-image-slider">
                    <img src={product.image01} onClick={() => setPreviewImg(product.image01)} alt="" className="image-list" />
                    <img src={product.image02} onClick={() => setPreviewImg(product.image02)} alt="" className="image-list" />
                    <img src={product.image03} onClick={() => setPreviewImg(product.image03)} alt="" className="image-list" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="breadcrumb">
                  <span><Link to="/">Home</Link></span>
                  <span><Link to="/foods">food</Link></span>
                </div>

                <div className="product">
                  <div className="product-title">
                    <h2>{title}</h2>
                  </div>
                  <div className="product-rating">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span className="review">(47 Review)</span>
                  </div>
                  <div className="product-price">
                    <span className="offer-price">${price}</span>

                  </div>

                  <div className="product-details">
                    <h3>Description</h3>
                    <p>{desc}</p>
                  </div>


                  <span className="divider"></span>

                  <div className="product-btn-group">

                    <button className="addTOCart__btn" onClick={addItem}>
                      Add to Cart
                    </button>
                    <button className="addTOCart__btn">
                      <Link to="/checkout">Proceed to checkout</Link>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="related__Product-title">
              <h2>You might also like</h2>
            </div>
            <div className="row">
              {relatedProduct.slice(0,4).map((item) => (
                <div className="col" key={item.id}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
      <Newsletter />
    </Helmet>

  );
};

export default FoodDetails;

