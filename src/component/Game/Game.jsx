import {useState}from 'react'
import "./style.scss";
import { useNavigate } from "react-router-dom";
import LiveTvIcon from '@mui/icons-material/LiveTv';
const livedata = "live";
import SportsDetails from "../../Pages/sportsdetails/SportsDetails"
export const Game = ({ index }) => {
    const navigate = useNavigate();
  
    const handleGameClick = () => {
      navigate('/sports/details');
    };


  return (
    <div className='gamechart' onClick={handleGameClick}>
        <div className="game-col-left">
           <div className="day-live">
         {index ==2? <div className="live">
          <span>Live</span>
      <div className="animate"> 

      </div>
      </div>:
         
             <div className="day">
                <span>Today</span></div>
                }

            
           
            </div>
            <div className="time">
                <span>2:30 PM</span>
            </div>
            <div className="game">
                <span>SCOTLAND V OMAN </span>

            </div>
            <div className="online">
                <span>BM</span>
                <span><LiveTvIcon/></span>
            </div>
        </div>
        <div className="game-col-right">
            <div className="game1" >
                <p>1.48</p>
                <p>1.49</p>
            </div>
            <div className="game2"  >
                <p>-</p>
                <p>-</p>
            </div>
            <div className="game1"  >
                <p>1.48</p>
                <p>1.49</p>
            </div>
        </div>
     

    </div>
  )
}

