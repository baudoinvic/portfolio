import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width: '100%'}}/>
          <div className="f-content">
             <span>baudoinvicbolingo@gmail.com</span>
               <div className='f-icons'>
                 
               <a href="https://www.instagram.com/baudoin_10/">
                <Insta color="white" size="3rem" />
                </a>
                 <a href="https://www.facebook.com/boduein.bolingo/">
                 <Facebook color='white'size='3rem' />
                 </a>
                <a href="https://github.com/baudoinvic">
                <Github color='white' size='3rem' />
                </a>
               
               </div>
          </div>
    </div>
  )
}

export default Footer
 