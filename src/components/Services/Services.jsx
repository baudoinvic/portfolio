import React from 'react'
import './Services.css'
import heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
 
  const transition = {duration : 1, type: 'string'}


  return (
    <div className='services' id='Services'>
       {/*left side */}

       <div className='awesome'>
         <span>My awesome</span>
         <span>Services</span>
         <span style={{fontSize: '16px'}}>
         I'm Building scalable web applications, Mobile apps and<br />
          beautiful websites for companies.
          in addtion i can offer you an service of those <br />
          works mentioned down and if you have a question don't<br />
          hesitate to get in touch with me. here down you can download<br />
          my cv for more details or information
         </span>
          <a href={Resume} download>
         <button style={{height: '50px', width:'130px'}} className='button s-button'>Download Cv</button>
         </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}>

        </div>
       </div>
      {/* right side */}

      <div className='cards'>
         
        
      <motion.div
       whileInView={{ left: '24rem' }}
       initial={{left: '25%'}}
        transition={transition}
       style={{ left: '24rem' }}
     >
    <Card 
    emoji={heartemoji}
    heading={'Design'}
    detail={"Figma, Adobe, photoshop,Adobe xd"}
  />
</motion.div>

          {/* second card */}

          <div style={{top: "12rem", left: "5rem"}}>
              
             <Card
               emoji={Glasses}
               heading={"Devloper"}
               detail={"Html,css,javascript, Nodejs, Redux, React, React native,Git,Github"}
             />
          </div>

           {/* third card */}

           <motion.div 
             whileInView={{ left: '24rem' }}
             initial={{left: '25%'}}
            transition={transition}
           style={{top: "22rem", left: "24rem"}}
           >
             <Card
               emoji={Humble}
               heading={"UI/UX"}
               detail={"creativity of making an imprevissive of user interface"}
             />
          </motion.div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
