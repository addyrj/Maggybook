import "./matchods.scss";
import React, { useState } from "react";
import { FaChevronDown, FaAngleRight } from "react-icons/fa6";

const MatchOds = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    {
      name: "Jana Fett",
      games: [
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
      ],
    },
    {
      name: "Another Player",
      games: [
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#72bbef" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
        { value1: "1.00", value2: "19.00", color: "#b0728b" },
      ],
    },
    {
      name: "Third Player",
      games: [
        { value1: '1.00', value2: '19.00', color: "#72bbef"  },
        { value1: '1.00', value2: '19.00', color: "#72bbef"  },
        { value1: '1.00', value2: '19.00', color: "#72bbef"  },
        { value1: '1.00', value2: '19.00', color: "#b0728b"  },
        { value1: '1.00', value2: '19.00', color: "#b0728b"  },
        { value1: '1.00', value2: '19.00', color: "#b0728b"  }
      ]
    }
  ];

  return (
    <div className="matchods-main">
      <div className="matchods-togel" onClick={toggle}>
        <div className="matchods">
      

          {!isOpen ? <FaAngleRight /> : <FaChevronDown />}
          <div className="data">
          <p>Match Odds</p>
            
          <p className="max-min">Max: 10K Min:100 Bet Delay: 5</p>
          </div>
          </div>
        </div>

        {isOpen && (
          <>
            <div className="lback">
              <div className="lback-left"></div>
              <div className="lback-right">
                <p>Max: 10K Min:100 Bet Delay: 5</p>
                <span>Back</span>
                <span>Lay</span>
              </div>
            </div>
            {data.map((item, index) => (
              <div key={index} className="layback-all">
                <div className="layback-left">
                  <p>{item.name}</p>
                </div>
                <div className="layback-right">
                  {item.games.map((game, gameIndex) => (
                    <div
                      key={gameIndex}
                      className="game"
                      style={{ backgroundColor: game.color }}
                    >
                      <p>{game.value1}</p>
                      <p>{game.value2}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
   
  );
};

export default MatchOds;
