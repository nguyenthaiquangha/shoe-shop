import React, { useState } from 'react';
import './register.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slide/user';
// import { signupUser } from '../../redux/slide/user';


export const Register = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // const users  =
  const handleRegister = () => {
    dispatch(registerUser({
      id: (new Date).getTime(),
      email,
      username,
      phone,
      password,
      confirmPassword
    }
    ))
    localStorage.setItem('user', JSON.stringify(
      {
        id: (new Date).getTime(),
        email,
        username,
        phone,
        password,
        confirmPassword
      }
    ))
    alert('Register success')
    navigation('/login')
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className="title"><h3>Register</h3></div>
        <div>
          <Link to={'/'}>
            <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
      <div className="content">
        {/* Registration form */}
        <form >
          <div className="user-details">
            {/* Input for Email */}
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* Input for Username */}
            <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            {/* Input for Phone Number */}
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required="" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {/* Input for Password */}
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* Input for confirmPassword */}
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          {/* Submit button */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="button">
              <Link to={'/login'}><button type='submit' >Back</button></Link>
            </div>
            <div className="button">
              <button type="button" onClick={handleRegister}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register;
