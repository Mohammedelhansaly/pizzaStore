import React, { useRef, useEffect } from 'react'

import logo from '../../assets/images/logo2.png'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import { gsap } from 'gsap'

const nav__links = [
    {
        display: 'Home',
        path: "/home"
    },
    {
        display: 'Foods',
        path: "/foods"
    },
    {
        display: 'Cart',
        path: "/cart"
    },
    {
        display: 'Contact',
        path: "/contact"
    },

]

const Header = () => {
    const timeline = gsap.timeline()


    const menuRef = useRef(null)
    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu')
    }
    const open = useRef(null)
    const toggleuser = () => {
        open.current.classList.toggle('active')
    }
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header__shrink')
            }
            else {
                headerRef.current.classList.remove('header__shrink')
            }
        })
    })

    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(cartUiActions.toggle())
    }

    
  

    return (
        <>
            <header className='header' ref={headerRef}>
                <div className='container'>
                    <div className="nav__wrapper ">
                        <div className="logo" >
                            <img src={logo} alt="logo" />

                        </div>
                    <div className="menu_items flex" >
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu" >
                                {nav__links.map((e, i) => {
                                    return (
                                        <>
                                            <NavLink to={e.path} key={i} className={navclass => navclass.isActive ? 'active__menu' : ''}>{e.display}</NavLink>
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="nav__right" >
                            <span className="cart__icon" onClick={toggle}>
                                <i className="ri-shopping-basket-line"></i>
                                <span className='cart__badge'>{totalQuantity}</span>
                            </span>
                            <span className="user" onClick={toggleuser}>
                                <i className="ri-user-line"></i>
                                <div className='user__menu' ref={open}>
                                    <ul>
                                        <div className="sign__btn">
                                            <button className='sign_in'><Link to='/login'> Sign In</Link></button>
                                            <button className='sign_up'><Link to='/register'>Sign Up</Link></button>
                                        </div>
                                       
                                    </ul>
                                </div>
                            </span>
                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
