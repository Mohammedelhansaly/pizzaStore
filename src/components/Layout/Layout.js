import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../components/UI/cart/Carts'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Halmet from '../Helmet/Helmet'

const Layout = () => {
  const showCart = useSelector(state => state.cartUi.cartIsVisible)

  return (
    <>
      <Header />
      {
        showCart && <Cart />
      }
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
