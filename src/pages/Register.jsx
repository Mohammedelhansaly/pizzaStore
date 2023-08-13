import React from 'react'
import { Link } from 'react-router-dom'
import Headtitle from '../components/Headtitle/headtitle'
import '../styles/Login.css'
import Helmet from '../components/Helmet/Helmet'
import { useEffect } from 'react'


const Register = () => {
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [username, setusername] = React.useState('')
  const [Cpassword, setCpassword] = React.useState('')

  const [allvalues, setallvalues] = React.useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    const newvalue = { email, password }
    setallvalues([...allvalues, newvalue])
    setemail('')
    setpassword('')
  }
  useEffect(() => {
    window.scroll(0, 0)
  },[])
  return (
    <>
    <Helmet title="Register">
    <Headtitle/>
      <section className='forms top'>
        <div className="container">
          <div className="sign-box">
          <h1 className='title'>Create Account </h1>
            <p>Enter Your Email and password bellow to log in to your account and use the benefists of our website.  </p>
            <form action="" onSubmit={formSubmit}>
              <input type="text" name='username' value={username} placeholder='Username' onChange={(e) => setusername(e.target.value)} />
              <input type="text" name='email' value={email} placeholder='Email' onChange={(e) => setemail(e.target.value)} />
              <input type="password" name='password' value={password} placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
              <input type="password" name='Cpassword' value={Cpassword} placeholder='Confirm Password' onChange={(e) => setCpassword(e.target.value)} />
              <button type='submit' className='danger-btn'>Sign In</button>
              <div className="liens">
                <p>Already have an account? <Link to='/Login'>Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      </Helmet>
    </>
  )
}

export default Register
