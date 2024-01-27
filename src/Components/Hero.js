import React from 'react'
import '../Styles/Hero.css'
import { motion } from "framer-motion"
export default function Hero() {
    // const initialPosition = window.innerWidth > 768 ? '-80vh' : '-50vh';
  return (
   <>
   <div className="hero-wrapper">
    <div className="hero">
        <motion.div 
          // animate={{translateX:[initialPosition,'0vh']}}
         // transition={{duration:1.5}}
        // viewport={{once:true}}
        className='left'>
            <p className='left-text'>
            Lessons and insights <span className='green'> from 8 years</span>
            </p>
            <p id='sub-text'>Where to grow your business as a photographer: site or social media ?</p>
            <button className="btn2">Register</button>
        </motion.div>
        <motion.div
         // animate={{opacity : [0,1]}}
        // transition={{duration:1,delay:0.5}}
       // viewport={{once:true}}
        className='right'>
            <img src='../Images/Person.jpg' alt="" />
        </motion.div>
    </div>
   </div>
   </>
  )
}
