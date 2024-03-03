import React from 'react'
// import Lottie from 'react-lottie';
import Lottie from 'react-lottie-player'

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
      {/* <Lottie options={defaultOptions}
              isStopped={false}
              isPaused={false}/> */}
      <Lottie
        loop
        animationData={animationData}
        play
        
      />

    </div>
  )
}

export default HeroAnim