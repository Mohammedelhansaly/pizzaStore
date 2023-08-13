import React, { useState } from 'react'
import { useEffect } from 'react'
import Headtitle from '../components/Headtitle/headtitle'
import Helmet from '../components/Helmet/Helmet'
import location from '../assets/images/icons8-code-régional-50.png'
import call from '../assets/images/icons8-téléphone-48.png'
import email from '../assets/images/icons8-message-rempli-64.png'
import '../styles/contact.css'


const Contact = () => {
  const [value,setvalue]=useState({
    name:"",
    email:"",
    msg:""
  })
  const change=(e)=>{
    const name=e.target.name
    setvalue({
      ...value,
      [name]:e.target.value
    })
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <Helmet title='Contact'>
        <Headtitle />
        <section className='contact'>
          <div className="container">
            <div className="row1">
              <div className="col">
                <div className="info__title">
                  <h3>Keep In Touch With Us</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, perferendis.</p>
                  <div className="info_desc">
                    <ul>
                      <li>
                        <div className="icon">
                          <img src={location} />
                        </div>
                        <div className="info">
                          <span>Address</span>
                          <p>328 Queensberry Street, North
                            Melbourne VIC 3051, Australia.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src={call} />
                        </div>
                        <div className="info">
                          <span>Phone</span>
                          <p>+(0) 392 94 03 01</p>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <img src={email} />
                        </div>
                        <div className="info">
                          <span>Email</span>
                          <p>contact@Pizza.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <form className="contact-form" action="#" method="post">

                  <h3 className="contact-heading-4">Tell us about yourself</h3>
                  <p className="contact-p">Whether you have questions or you would just like to say hello, contact us.</p>

                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <label for="name" className="label">Name</label>
                          <input name="name" className="input form-input" type="text" value={value.name} onChange={change} required="" />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <label for="email" className="label">Email</label>
                          <input name="email" className="input form-input" type="email" value={value.email} onChange={change} required="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label for="msg" className="label">Messages</label>
                      <textarea name="msg" className="textarea" required="" value={value.msg} onChange={change}></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <button className="submit-button">
                      <span>Send Messages</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13498.032220780116!2d-7.958565502388514!3d32.244410048287804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf7a781193e37b%3A0x600a48af566b132a!2sBen%20Guerir!5e0!3m2!1sfr!2sma!4v1678536351400!5m2!1sfr!2sma" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  )
}

export default Contact
