import "./fancy.scss";
import { useState } from "react";
import { FaChevronDown, FaAngleRight } from "react-icons/fa6";
const Fancy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    { id: 1, text: '50 Over Run LEI 50 Over Run LE', game1: [139, 1290], game2: [1390, 1290], max: 130, min: '20k' },
    { id: 2, text: '20 Over Run LEI 50 Over Run LE', game1: [139, 1290], game2: [1390, 1290], max: 130, min: '20k' },
    { id: 3, text: '50 Over Run LEI 50 Over Run LE', game1: [139, 1290], game2: [1390, 1290], max: 130, min: '20k' },
    { id: 4, text: '70 Over Run LEI 50 Over Run LE', game1: [139, 1290], game2: [1390, 1290], max: 130, min: '20k' },
    { id: 5, text: '50 Over Run LEI 50 Over Run LE', game1: [139, 1290], game2: [1390, 1290], max: 130, min: '20k' },
  
  ];

  return (
    <div className="fancy-main">
      <div className="fancy-togel" onClick={toggle}>
        <div className="fancy">
          {!isOpen ? <FaAngleRight /> : <FaChevronDown />}
          <p>Fancy2</p>
        </div>
        </div>
        {isOpen && (
        <div className="container-fancy">
          <div className="fback">
            <div className="fback-left fback-main">
                <div className="fback-yes">

              <span>No</span>
              <span>Yes</span>
                </div>
            </div>
            <div className="fback-left">
                <div className="fback-yes">

              <span>No</span>
              <span>Yes</span>
                </div>
            </div>
          
          </div>

          <div className="fanback-all">
      {data.map((item, index) => (
        <div className="fanback-left" key={item.id}>
          <div className="fanback-left-one">
            <p>{item.text}</p>
          </div>
          <div className="fanback-left-two">
            <div className="game-option">
              <div className="game">
                <p>{item.game1[0]}</p>
                <p>{item.game1[1]}</p>
              </div>
              <div className="game">
                <p>{item.game2[0]}</p>
                <p>{item.game2[1]}</p>
              </div>
            </div>
            <div className="game-t">
              <p>max:{item.max}</p>
              <p>min:{item.min}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
          
        </div>
         )} 
    
    </div>
  );
};

export default Fancy;
