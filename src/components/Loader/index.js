import React from 'react'

import './styles.scss'

export default function () {
  return (
    <div styleName='loader-container'>
      <svg
        styleName='spinner'
        width='65px'
        height='65px'
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          styleName='circle'
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        />
      </svg>
    </div>
  )
}
