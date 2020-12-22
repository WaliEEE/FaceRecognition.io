import React, { Component } from "react";
import "tachyons";

const Face = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute ma3 mt3">
        <img id="img" src={imageUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Face;
