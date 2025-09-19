'use client';
import React from "react";
import './events2.css'

const Events2 = (props) => {
  return (
    <div className="output-container">
      <div className="output-wrapper">
        <div className="output-area">
          <div className="output-content">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events2;