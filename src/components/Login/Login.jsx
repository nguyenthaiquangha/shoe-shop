import React, { useState } from 'react'
import './../Register/register.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slide/user';
// import { loginUser } from '../../redux/slide/user';

export const Login = () => {
  //stae
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //redux state
  // const users = useSelector((state) => state.userSlice.users);
  // console.log(users);

  const users = JSON.parse(localStorage.getItem('user'))


  // const dipatch = useDispatch()
  const navigation = useNavigate()
  const handleLoginEvent = () => {
    if (users.email === email  && users.password === password) {
      // dipatch(loginUser(email,password));
      alert('login success');
      navigation('/')
    } else {
      alert('Email & password are incorrect')
    }
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className="title"><h3>Login</h3></div>
        <div>
          <Link to={'/'}>
            <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
      <div className="content">
        {/* Registration form */}
        <form onSubmit={handleLoginEvent}>
          <div className="user-details">
            {/* Input for Email */}
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Input for Password */}
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

          </div>
          {/* Submit button */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="button">
              <Link to={'/register'}><button>Register</button></Link>
            </div>
            <div className="button">
              <button type='button' onClick={handleLoginEvent} >Login</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
export default Login;
