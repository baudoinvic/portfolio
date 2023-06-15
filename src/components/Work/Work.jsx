import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {motion} from 'framer-motion'

const Work = () => {

  return (
    <div className='works'>
       <div className='awesome'>
         <span>Works for all this brands</span>
         <span>brands & Clients</span>
         <span style={{fontSize: '17px'}}>
            I'm always intersted for these brands companies cause it's they help me<br />
            to mprove my skills as well.
             for what i do is to make
             better design for mobile apps and<br />
              for web apps additonally i have been empower to learn myself for some<br />
            companies which i mentioned there if you have a question feel free just to ask
            
         </span>
         <button style={{height: '50px', width: '140px'}} className='button s-button'>Hire me</button>
          <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
            
            {/* right side */}

            <div className="w-right">
              <motion.div
               initial={{rotate: 45}}
               whileInView={{rotate: 0}}
               viewport={{margin: '-40px'}}
               transition={{duration: 3.5, type: 'string'}}
                >
             <div className="w-mainCircle">
             <div className="w-secCircle">
               <img src={Upwork} alt="" />
             </div>

             <div className="w-secCircle">
               <img src={Fiverr} alt="" />
             </div>

             <div className="w-secCircle">
               <img src={Amazon} alt="" />
             </div>

             <div className="w-secCircle">
               <img src={Shopify} alt="" />
             </div>

             <div className="w-secCircle">
               <img src={Facebook} alt="" />
               </div>
               </div>
             </motion.div>
            

             {/*background circles */}
 
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
            </div>
          </div>
  )
}

export default Work
