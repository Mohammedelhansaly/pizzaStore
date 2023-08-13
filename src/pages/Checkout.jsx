import React, { useEffect } from 'react'
import imgCards from '../assets/images/pay.png'
import Headtitle from '../components/Headtitle/headtitle'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'

const Checkout = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <Helmet title="Checkout">
      <Headtitle />
      <section className='checkout'>
        <div className="container">
          <form action="">

            <div className="row1">

              <div className="col">

                <h3 className="checkout_title">billing address</h3>

                <div className="inputBox">
                  <span>full name :</span>
                  <input type="text" placeholder="mohammed el hansaly" />
                </div>
                <div className="inputBox">
                  <span>email :</span>
                  <input type="email" placeholder="example@example.com" />
                </div>
                <div className="inputBox">
                  <span>address :</span>
                  <input type="text" placeholder="hay jadid " />
                </div>
                <div className="inputBox">
                  <span>city :</span>
                  <input type="text" placeholder="benguerir" />
                </div>

                <div className="flex">
                  <div className="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="morocco" />
                  </div>
                  <div className="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456" />
                  </div>
                </div>

              </div>

              <div className="col">

                <h3 className="checkout_title">payment</h3>

                <div className="inputBox">
                  <span>cards accepted :</span>
                  <img src={imgCards} alt="" />
                </div>
                <div className="inputBox">
                  <span>name on card :</span>
                  <input type="text" placeholder="mr. mohammed" />
                </div>
                <div className="inputBox">
                  <span>credit card number :</span>
                  <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                  <span>exp month :</span>
                  <input type="text" placeholder="january" />
                </div>

                <div className="flex">
                  <div className="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022" />
                  </div>
                  <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234" />
                  </div>
                </div>

              </div>

            </div>

            <input type="submit" value="confirm" className="submit-btn" />

          </form>

        </div>


      </section>
    </Helmet>
  )
}

export default Checkout
