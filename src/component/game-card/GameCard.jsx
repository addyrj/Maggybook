import React from 'react'
import "./style.scss"
// import demo from "../../assets/4.png"
const GameCard = ({name , img,index,activeTab,setActiveTab}) => {
  return (
    <div className={`gamecard ${index === activeTab? 'active' : ''} `} onClick={()=>setActiveTab(index)}>
        <div className="img-sec">
        <img src={img} alt="" />


        </div>
        <p>{name}</p>
    </div>
  )
}

export default GameCard