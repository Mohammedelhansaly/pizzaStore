import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Headtitle from '../components/Headtitle/headtitle'
import '../styles/Login.css'
import Helmet from '../components/Helmet/Helmet'
import { useEffect } from 'react'


const Login = () => {
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
const navigate=useNavigate()
  const [allvalues, setallvalues] = React.useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    const newvalue = { email, password }
    setallvalues([...allvalues, newvalue])
    setemail('')
    setpassword('')
    navigate('/')
    
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <Helmet title="Login">
        <Headtitle />
        <section className='forms top'>
          <div className="container">
            <div className="sign-box">
              <h1 className='title'>Sign In</h1>
              <p>Enter Your Email and password bellow to log in to your account and use the benefists of our website.  </p>
              <form action="" onSubmit={formSubmit}>
                <input type="text" name='email' value={email} placeholder='Email' onChange={(e) => setemail(e.target.value)} />
                <input type="password" name='password' value={password} placeholder='Password' onChange={(e) => setpassword(e.target.value)} />

                <button type='submit' className='danger-btn'>Sign In</button>

                <div className="liens">
                  <p>Dont Have Account ? <Link to='/register'>Sign Up</Link></p>
                  <p><Link to='/'>I forget my Password</Link></p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  )
}

export default Login
