import React, { useState } from "react";
import "./bet.scss";
import { MdClear } from "react-icons/md";



const SetBetValue = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the click is on the overlay
    }
  };

  const [priceValues, setPriceValues] = useState([
    { id: 1, label: "Value 1", amount: 1000 },
    { id: 2, label: "Value 2", amount: 2000 },
    { id: 3, label: "Value 3", amount: 3000 },
    { id: 4, label: "Value 4", amount: 4000 },
    { id: 5, label: "Value 5", amount: 5000 },
    { id: 6, label: "Value 6", amount: 6000 },
    { id: 7, label: "Value 7", amount: 7000 },
    { id: 8, label: "Value 8", amount: 8000 },
    { id: 9, label: "Value 9", amount: 9000 },
    { id: 10, label: "Value 10", amount: 10000 },
  ]);


  const handleAmountChange = (id, newAmount) => {
    setPriceValues((prevValues) =>
      prevValues.map((item) =>
        item.id === id ? { ...item, amount: newAmount } : item
      )
    );
  };


  return (
    <div className="betvalue" onClick={handleOverlayClick}>
      <div className="set">
        <div className="modal-button_n">
          <h2>Set Button Value</h2>
          <button onClick={onClose} className="close-button_n">
            <MdClear />
          </button>
        </div>
        <div>
          <div className="gameButtons">
            <button type="submit">gameButtons</button>
          </div>
          <div className="price-value">
            <div className="price-value-main">
              <div className="value">
                <span>Price label</span>
              </div>
              <div className="value">
                <span>Price value</span>
              </div>
            </div>
            {priceValues.map(({ id, label, amount }) => (
              <div key={id} className="stack-price">
                <div className="stack-price-half">
                  <p>{label}</p>
                </div>
                <div className="stack-price-half-n">
                  <input
                    type=""
                    value={amount}
                    onChange={(e) =>
                      handleAmountChange(id, Number(e.target.value))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SetBetValue;
