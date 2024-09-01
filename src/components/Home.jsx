import React from 'react';
import './Home.css'
import ComplaintMap from './ComplaintMap';
import image from '../assets/undraw-character.svg'
import image1 from '../assets/undraw-like-dislike.svg'

const Home = () => {
   return (
      <>
         <div className='homeWrapper'>
            <div className='homeSection'>
               <h1>Water Wise</h1>
               <p className='heroText'><span className='quotes'>"</span>Public water bodies are<br />&nbsp;getting increasingly tainted,<br />
                  &nbsp;We are here to help you to<br />
                  &nbsp;<span className='boldUnderline'>take action and make a difference.</span><span className='quotes'>"</span></p>
            </div>
            <div className="mapWrapper">
               <ComplaintMap className="map"/>
            </div>
         </div>
         <div className="problemWrapper">
            <div className="problemImageWrapper">
               <img src={image} alt="" />
            </div>
            <div className="textWrapper">
               <h1>The Common Issue</h1>
               <p>
                  Residents near contaminated water bodies face health issues from pollution but struggle to reach government support due to barriers like lack of awareness and inadequate reporting mechanisms, leaving them in a cycle of neglect.
               </p>
            </div>
         </div> 
      </>
   );
};

export default Home;