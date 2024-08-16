import React from 'react'
import "./style.scss"
import { Speaker } from '../../../assets'

const Marquee = () => {
  return (
    <div className="sub-col-left">
    <div className="marquee-sec">
    <marquee>WELCOME</marquee>
  
    </div>
    <div className="icon-speak">
        <img src={Speaker} alt="speak" />
    </div>
</div>
  )
}

export default Marquee