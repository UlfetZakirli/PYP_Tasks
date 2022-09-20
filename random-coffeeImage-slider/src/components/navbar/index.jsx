import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo1.jpg'
import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
           <ul>
           <li>
             <Link to='/'><img src={Logo} alt="" /></Link>
            </li>
            <li className='page' style={{marginLeft:'57rem'}}><Link to='/'>Home</Link></li>
            <li className='page' ><Link to='slider'>Slider</Link></li>
           </ul>

        </div>


    </div>
  )
}

export default Navbar