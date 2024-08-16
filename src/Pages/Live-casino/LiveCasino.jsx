import React, { useState } from 'react'
import GameCard from '../../component/game-card/GameCard'
import {arry} from "../../common/MainLayout/json/json";


const LiveCasino = () => {
    const findData = arry?.filter((elm)=>elm?.name == "International Casino")
    const [activeTab, setActiveTab] = useState(0);
  return (
    <>
    <div className="live-casino">

         { findData?.map((item)=>{
             return(
                 <div className="fantacy-sec"  key={item?.name}>
            {/* <h1>{item?.name}</h1> */}
            <div className="fantacy-game">
              {item?.img?.map((elm , i)=>{
                  return(
                      
                      <GameCard img={elm?.img}  setActiveTab={setActiveTab} index={i} activeTab={activeTab} name={elm?.imageName} key={elm?.imageName}/>
                    )
                })}
            </div>
          </div>
              )
            })}
            </div>
    </>
  )
}

export default LiveCasino