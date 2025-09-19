'use client';
import React from "react";
import './outputDisplay.css'

const OutputDisplay = ({ content = "", placeholder = "Translation will appear here..." }) => {
  return (
    <div className="output-container">
      <div className="output-wrapper">
        <div className="output-area">
          <div className="output-content">
            {content || <span className="placeholder-text">{placeholder}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputDisplay;