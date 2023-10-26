import React, { useLayoutEffect, useState } from 'react'
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from '@react-spring/web'

import stylesGrow from '../../stylesGrow.css';

export default function SmallGrow({img1, img2, inverse}) {

  const IMAGES = [
    img1,
    img2
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()

  const polygonIzq = (inverse) => {
    if(inverse){
      return ('polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)')
    } else {
      return ('polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)')
    }
  }

  const polygonDer = (inverse) => {
    if(inverse){
      return ('polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)')
    } else {
      return ('polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)')
    }
  }

  

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: polygonIzq(inverse),
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: polygonDer(inverse),
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 2000,
    },
    delay: 1000,
    ref: springApi,
  })

  /*const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 2000,
    },
    loop: true,
    ref: springApi,
  })*/

  useLayoutEffect(() => {
    springApi.start()
  }, [activeIndex])

  return (
    <div className={stylesGrow.container}>
      <div className={stylesGrow.container__inner}>
        {transitions((springs, item) => (
          <animated.div className={stylesGrow.img__container} style={springs}>
            <img src={IMAGES[item]} className='animatedGrow1'/>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
