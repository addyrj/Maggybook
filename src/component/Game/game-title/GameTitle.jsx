import React from 'react';
import "./style.scss";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

export const GameTitle = ({ names , icon }) => {
  return (
    <div className='game-title'>
      {names.map((name, index) => (
        <div key={index} className="name">
          <span>{icon}</span>
          <p>{name}</p>
        </div>
      ))}
      <div className="rule">
        <p>1</p>
        <p>X</p>
        <p>2</p>
      </div>
    </div>
  );
};
