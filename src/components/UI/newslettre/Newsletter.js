import React from 'react'
import '../../../styles/Newsletter.css'
import newsletterIMG from '../../../assets/images/newsletter.png'

const Newsletter = () => {
    return (
        <section className='newsLetters__section'>
            <div className="container">
                <div className="row1">
                    <div className="col">
                        <img src={newsletterIMG} alt="" className='newsletter__img' />
                    </div>
                    <div className="col">
                        <h1 className='newsletter__title'>LETS CONNECT!</h1>
                        <p className='newsletter__desc'>And get a 10% off bill offers and invites!</p>
                        <div className="newsletter__box">
                            <div className="input__box">
                                <input type="text" placeholder='YOUR EMAIL ADDRESS' />
                                <button className='newsletter__btn'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter