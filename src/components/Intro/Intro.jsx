import React from 'react'
import  './Intro.css'
import Github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
 import glas from '../../img/glas.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import musicapp from '../../img/musicapp.png'


function Intro() {

     const transition = {duration : 2, type: 'spring'}
   console.log(FloatingDiv)
  return (
    <div className='intro'>
     <div className='i-left'>
        <div className='i-name'>
         <span>Hey! I Am</span>
         <span>Baudoin Bolingo</span>
          <span style={{fontSize: '18px'}}>software Developer with high level of Experience in Mobile Applications<br></br>
            and web development, producting the quality work
          </span>
        </div>

      <Link spy={true} to = 'contact' smooth={true} >
      <button style={{height:'50px', width: '140px'}} className='button i-button'>Hire me
      </button>
       </Link>
       <div className='i-icons'>
         <a href='https://github.com/baudoinvic'>
         <img src={Github} alt=""/>
         </a>

          <a href='https://www.linkedin.com/in/bolingo-baudoin-b19229221/'>
          <img src={linkedin} alt=""/>
          </a>
          
         <a href='https://www.instagram.com/baudoin_10/'>
         <img src={instagram} alt= ""/>
         </a>
       </div>

        </div> 
        <div className='i-right'>
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img style={{paddingRight:'8rem', top: '8rem', width: '350px'}} src={musicapp} alt="" />

           <motion.img 
            initial = {{left: "-30%"}}
            whileInView={{left: "-20%"}}
            transition={transition}

           src={glas} alt="" />

        <motion.div 
         initial={{ top: '-4%', left: '74%' }}
           whileInView={{ left: '68%' }}
         transition={transition}
         style={{ top: '-4%', left: '68%' }}
         className='floting-div'
      >
       <FloatingDiv image={crown} txt1='web' txt2='Developer' />
       </motion.div>
             
             
       <motion.div
         initial={{ left: '9rem', top: '26rem' }}
         whileInView={{ left: '0rem'}}
         transition={{ transition }}
         className='floting-div'
        >
      <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
      </motion.div>
           {/* blur divs  */}

           <div className='bluer' style={{background: "rgb(238 210 255)"}}>

           </div>
              <div className='blur' style={{
                  background: '#C1F5FF',
                  top: '17rem',
                  width: '21rem',
                  height: '11rem',
                  left: '-9rem'
                }}></div>
          </div> 
         </div>
  )
}

export default Intro
