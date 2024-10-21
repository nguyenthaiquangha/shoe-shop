import React from 'react'
import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'

export const InforUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  const handleUpdateUser =() => {
    
  }
  return (
    <>
      {/* <Header /> */}
      <div className='container'>
      <div className='header'>
        <div className="title"><h3>Infor</h3></div>
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
              <input type="text" placeholder="Enter your email"  value={user.email}/>
            </div>
            {/* Input for Username */}
            <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Enter your username" value={user.username}/>
            </div>
            {/* Input for Phone Number */}
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required="" value={user.phone}/>
            </div>
            {/* Input for Password */}
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password"  value={user.password}/>
            </div>           
          </div>

          {/* Submit button */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="button">
              <Link to={'/login'}><button type='submit' >Back</button></Link>
            </div>
            <div className="button">
              <button type="button" onClick={handleUpdateUser}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    </>
  )
}
