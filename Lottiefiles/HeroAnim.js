import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './welcome.json'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  
};
function HeroAnim() {

  return (
    <div className=''>
      <Lottie options={defaultOptions}
              isStopped={false}
              isPaused={false}/>
      
    </div>
  )
}

export default HeroAnim