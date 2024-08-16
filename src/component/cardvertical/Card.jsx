import React from 'react'
import"./style.scss"
import demo from "../../assets/1.jpg"
const Card = () => {
  return (
    <div className="card">
     <img src={demo} alt="logo" />
    </div>
  )
}

export default Card