import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import heroVedio from '../assets/images/vedio2.mp4'
import Category from '../components/UI/category/Category'
import '../styles/hero-section.css'
import '../styles/home.css'

import { gsap } from 'gsap'

import service1 from '../assets/images/service-01.png'
import service2 from '../assets/images/service-02.png'
import service3 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products'

import foodCategory01 from '../assets/images/pizza.png'
import foodCategory02 from '../assets/images/bread.png'
import foodCategory03 from '../assets/images/hamburger.png'



import ProductCard from '../components/UI/product-card/ProductCard'

import whyImg from '../assets/images/whyIMG.png'


import networkImg from '../assets/images/network.png'

import TestimonialSlider from '../components/UI/slider/TestimonialSlider'
import Gallery from '../components/UI/counter/Counter'
import Counter from '../components/UI/counter/Counter'
import Newsletter from '../components/UI/newslettre/Newsletter'



const featureData = [
  {
    title: 'Quick Delivery',
    img: service1,
    desc: 'Lorem ipsum dolor sit amet , similique possimus ab'
  },
  {
    title: 'Super Dine In ',
    img: service2,
    desc: 'Lorem ipsum dolor sit amet , similique possimus ab'
  },
  {
    title: 'Easy Pick Up',
    img: service3,
    desc: 'Lorem ipsum dolor sit amet , similique possimus ab'
  }
]

const Home = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const [hotPizza, sethotPizza] = useState([])
  useEffect(() => {
    const filterPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filterPizza.slice(0, 4)
    sethotPizza(slicePizza)
  }, [products])


  let title1 = useRef(null)
  let title2 = useRef(null)
  let desc = useRef(null)
  let btn = useRef(null)
  const timeline = gsap.timeline()

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.from(title1, {
        delay: .7,
        duration: 1,
        opacity: 0,
        x: -100
      })
      timeline.from(title2, {
        duration: 1,
        opacity: 0,
        x: 100
      }, "-=.2")
      timeline.from(desc, {
        duration: 1,
        opacity: 0,
        x: -100
      }, "-=.2")
      timeline.from(btn, {
        duration: 1,
        opacity: 0,
        y: 100
      }, "-=.2")
    })

    return () => ctx.revert();
  }, [])


  return (
    <>
      <Helmet title='Home'>
        <section className='Home'>
          <div className="container">
            <div className="content">
              <div className="hero__content">
                <h5 ref={el => title1 = el}>Easy way to make an order </h5>
                <h1 ref={el => title2 = el} className='hero__title'><span>HUNGRY ? </span> just wait <br /> food <span>at your door </span></h1>
                <p ref={el => desc = el} className='hero__desc'>Every order you place you accumulate CREDIT to be used as a discount for your next order</p>
                <div ref={el => btn = el} className="div">
                  <div className="hero__btn">
                    <button className='order__btn'> Order now <i class="ri-arrow-right-s-line"></i></button>
                    <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                  </div>
                  <div className='shipping'>
                    <p><span className='shipping__icon'><i class="ri-car-line"></i></span>{' '} no shipping charge</p>
                    <p><span className='shipping__icon'><i class="ri-shield-check-line"></i></span>{' '} 100% secure checkout</p>
                  </div>
                </div>
              </div>
              <video src={heroVedio} className="heroVedio" autoPlay muted loop  ></video>

            </div>
          </div>
        </section>

        <section className='category'>
          <Category />
        </section>

        <section className='feature'>
          <div className="container">

            <div className="feature__info">
              <h5 className='feature__subtitle'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>we will  <span> take care</span></h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consequuntur.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus nostrum rem doloremque maxime deleniti. </p>
            </div>
            <div className="row3">
              {
                featureData.map((item, index) => {
                  return (
                    <>
                      <div className="col" key={index}>
                        <div className="feature__item">
                          <img src={item.img} alt="" />
                          <h5>{item.title}</h5>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row2">
              <div className="col">
                <h2>Popular</h2>
              </div>

              <div className="row">
                {
                  products.slice(0, 8).map((item, index) => {
                    return (
                      <>
                        <div className="col product__col" key={index}>
                          <ProductCard item={item} />
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>

        <section className='why__tasty-food'>
          <div className="container">
            <div className="row1">
              <div className="col">
                <img src={whyImg} alt="" className='Why__img' />
              </div>
              <div className="col">
                <div className="why__tasty-treat">
                  <h2 className='tasty__title'>Why <span>Tasty Treat?</span></h2>
                  <p className='tasty-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque explicabo iste soluta eum voluptatibus obcaecati, esse voluptas consequuntur dolore, harum temporibus praesentium exercitationem tempore aliquid quae facere vero minima?</p>
                  <ul className='tasty__list'>
                    <li className='tasty__list-item'><p className='tasty__sm-title'><i className="ri-checkbox-circle-line"></i> Fresh and Tasty Foods</p><p className='tasty__desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quas!</p></li>
                    <li className='tasty__list-item'><p className='tasty__sm-title'><i className="ri-checkbox-circle-line"></i> Quality Support Foods</p><p className='tasty__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ipsam!</p></li>
                    <li className='tasty__list-item'><p className='tasty__sm-title'><i className="ri-checkbox-circle-line"></i> Order from any location</p><p className='tasty__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, veritatis.</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className="container">
            <div className="row2">
              <div className="col">
                <h2 className='hot__pizza'>Hot Pizza</h2>
              </div>
              <div className="row">
                {
                  hotPizza.map(item => {
                    return (
                      <>
                        <div className="col">
                          <ProductCard item={item} />
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>

        <section className='testmonial__section'>
          <div className="container">
            <div className="testimonial">
              <h5 className='testimonail__subtitle'>Testimonial</h5>
              <h2 className='testimonial__title'>What our <span>customers</span> are saying</h2>

              <TestimonialSlider />
            </div>

          </div>
        </section>
        <section className='counter__section'>
          <div className="container">
            <Counter />
          </div>
        </section>
        <Newsletter />



      </Helmet>
    </>
  )
}

export default Home
