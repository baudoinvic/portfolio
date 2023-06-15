import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Baudoin</div>
         <Toggle />
      </div>
       <div className='n-right'>
          <div className='n-list'>
            <ul style={{listStyleType: 'none'}}>
                <Link spy={true} to = 'Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to = 'Services' smooth={true}>
                <li>Services</li>
                </Link>
                  <Link spy={true} to = 'Experience' smooth={true} >
                  <li>Experience</li>
                  </Link>
                  <Link spy={true} to = 'Portfolio' smooth={true} >
                  <li>Portfolio</li>
                  </Link>
                  <Link spy={true} to ='contact' smooth={true}>
           <button style={{height: '50px', width: '120px'}} className='button n-button' >
              Contact me
           </button>
           </Link>
            </ul>
          </div>
            
       </div>
    </div>
  )
}

export default Navbar
