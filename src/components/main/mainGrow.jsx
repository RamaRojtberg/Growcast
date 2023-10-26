import React from 'react'
//import { useSpring, animated } from '@react-spring/web'
import { useTrail, animated } from '@react-spring/web'

export default function MainGrow({img}) {
    
    //TRAIL
    const [trails, api] = useTrail(
    1,
    () => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            mass: 5,
            friction: 20,
            tension: 280,
            duration: 3500
          }
    }),[])
    
  return (
    <div>
        
        {/* TRAIL */}
        {trails.map((props, index) => (
        <animated.div style={props} key={index}>
            {/* <h1>Growcast</h1> */}
            <img src={img} alt='mainGrow' className='mainGrow'/>
        </animated.div>
    ))}
    </div>
  )
}
