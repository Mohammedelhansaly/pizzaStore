import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './headtitle.css'

const Headtitle = () => {
    const location = useLocation()
    return (
        <>
            <section className='images-heading'>
                <div className="container">
                    <div className="row">
                        <h1>{location.pathname.split('/')}</h1>
                        <button>
                            <Link to="/">Home / </Link>
                            <span>{location.pathname.split('/')}</span>
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Headtitle