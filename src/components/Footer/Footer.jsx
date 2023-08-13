import React from 'react'
import logo from '../../assets/images/logo2.png'
import paymentIMG from '../../assets/images/pay.png'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
import { useState } from 'react'


const Footer = () => {
  const [newsletter, setnewsletter] = useState('')
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer__logo">
                <img src={logo} alt="logo" />
                <p>Lorem Eius vel libero ratione quidem totam alias?</p>
              </div>
            </div>
            <div className="col">
              <h5 className='Footer__title'>Delivery Time</h5>
              <ul className='Delivery__time-list'>
                <li className='Delivery__time-item'>
                  <span>Sunday - Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </li>
                <li className='Delivery__time-item'>
                  <span>Friday - Saturday</span>
                  <p>Off day</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5 className='Footer__title'>Contact</h5>
              <ul className='Delivery__time-list'>
                <li className='Delivery__time-item'>
                  <span>Localisation : Morocco , BenGuerir 159 </span>
                </li>
                <li className='Delivery__time-item'>
                  <span>Phone  : +212 633 09 79 96</span>
                </li>
                <li className='Delivery__time-item'>
                  <span>Email : Exemple@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5 className='Footer__title'>Newsletter</h5>
              <p className='Footer_desc'>subscribe our newsletter</p>
              <div className="newsletter">
                <input type="text" placeholder='Enter your Email' value={newsletter} onChange={(e) => setnewsletter(e.target.value)} />
                <span><i className="ri-send-plane-line"></i></span>
              </div>
              <div className="payment">
                <img src={paymentIMG} alt="" />
              </div>

            </div>
          </div>
          <div className="copyright">
            <p className='copyright__info'>copyright - 2022, website made by Mohammed el hansaly. All Rights Reserved</p>
            <div className="social__links">
              <span><Link to=''><i className="ri-facebook-line"></i></Link></span>
              <span><Link to=''><i className="ri-instagram-line"></i></Link></span>
              <span><Link to=''><i className="ri-github-line"></i></Link></span>
              <span><Link to=''><i className="ri-youtube-line"></i></Link></span>
              <span><Link to=''><i className="ri-linkedin-line"></i></Link></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
