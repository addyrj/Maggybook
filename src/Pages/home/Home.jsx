import React, { useRef, useState } from "react";
import "./styles.scss";
import VerticalMode from "../../component/slider-sec/VerticalMode";
import SimpleSlider from "../../component/slider-sec/SimpleSlider/SimpleSlider";
import { Game } from "../../component/Game/Game";
import { GameTitle } from "../../component/Game/game-title/GameTitle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { SubNav } from "../../layout/subnav/SubNav";
import SubNavTwo from "../../layout/subnavtwo/SubNavTwo";
import Footer from "../../layout/footer/Footer";
import GameCard from "../../component/game-card/GameCard";
import {arry} from "../../common/MainLayout/json/json";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Navbar from "../../layout/navbar";
import {useMediaQuery} from "../../useMediaQuery"

// import  "../../assets/index";

const Home = () => {
  const matchArray = [
    { name: "In Play", color: "gray", icon: <AccessAlarmsIcon />  },
    { name: "Cricket", color: "rgb(32, 50, 123)", icon: <SportsCricketIcon /> },
    { name: "Tennis", color: "rgb(241, 133, 33)", icon: <SportsBaseballIcon /> },
    { name: "Football", color: "rgb(3, 179, 127)", icon: <SportsSoccerIcon /> },
    { name: "Horse Racing", color: "rgb(158, 64, 37)", icon: <AccessAlarmsIcon /> },
  ];

  const [selectedGame, setSelectedGame] = useState("In Play");
  const [selectedGameIcon, setSelectedGameIcon] = useState(<AccessAlarmsIcon />);
  
  const [color, setColor] = useState("gray");
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust the value to control the scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust the value to control the scroll distance
      behavior: "smooth",
    });
  };

  // Extract names from matchArray
  const names = matchArray.map(item => {item.name});
  const icon = matchArray.map(item => {item.icon});
  const isMobile = useMediaQuery("(max-width:780px)")
  return (
    <>
   
  
    <section className="Exchange-sec">
      <div className="main-left-container">
        <div className="hero-sec">
          <SimpleSlider />
        </div>
        {isMobile && 
  

        <Navbar />
    
        }
       
        <div className="tabs">
          <div className="horizontal-scroll-container">
            <button onClick={scrollLeft} className="scroll-button left">
              <KeyboardArrowLeftIcon/>
            </button>
            <div className="scroll-content" ref={scrollContainerRef}>
              {matchArray?.map((item) => {
                return (
                  <div
                  className="item"
                  key={item?.name}
                  style={{
                    backgroundColor: item?.name === selectedGame ? item?.color : "",
                  }}
                  onClick={() => {
                    
                    setSelectedGameIcon(item?.icon);
                    setSelectedGame(item?.name);
                    setColor(item?.color);
                  }}
                  >
                    <span className="tab-name-icon"> {item?.icon}</span>{item?.name}
                  </div>
                );
              })}
            </div>
            <button onClick={scrollRight} className="scroll-button right">
              <KeyboardArrowRightIcon/>
            </button>
          </div>
          <div
            style={{ width: "100%", backgroundColor: color }}
          >
            <GameTitle names={[selectedGame]} icon={[selectedGameIcon]} />
            <div className="games-col">
             {[1,2,3,4,5,6].map((item,i)=>{
              return(
                <Game key={i} index={i}/>
              )
             })}
             
               
              
            </div>
          </div>
          
            { arry?.map((item)=>{
              return(
          <div className="fantacy-sec"  key={item?.name}>
            <h1>{item?.name}</h1>
            <div className="fantacy-game">
              {item?.img?.map((elm)=>{
                return(

                  <GameCard img={elm?.img} name={elm?.imageName} key={elm?.imageName}/>
                )
              })}
            </div>
          </div>
              )
        })}
        
      
        </div>
   <Footer/>
      </div>
      <div className="main-right-container">
        <p>Our Casino</p>
        <div className="game-slider">
          <VerticalMode />
        </div>
      </div>
    </section>
              </>
  );
};

export default Home;
