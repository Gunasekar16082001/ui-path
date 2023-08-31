import React from 'react';
import "../App.css"

function Banner() {
  return (
    <div className="banner">
      <div className="center-text">
        <p>Canopy is Amazon, curated</p>
      </div>
      <div className="columns">
        <div className="column">
          <div className="bordered-box">
            <p>Lear about Canopy</p>
          </div>
        </div>
        <div className="column-c">
          <div className="bordered-box">
            <p>Find great gifts</p>
          </div>
        </div>
        <div className="column">
          <div className="bordered-box">
            <p>Join to save products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
