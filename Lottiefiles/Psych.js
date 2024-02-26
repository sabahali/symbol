import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './psych.json'


export default function Psych() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    
  };

  return <div className=''>
    <Lottie options={defaultOptions}
            isStopped={false}
            isPaused={false}/>
    
  </div>
}
