import React, { Component } from "react";
import "tachyons";

const Face = ({ imageUrl }) => {
  return (
    <div className="center">
      <div className="absolute ma3 mt3">
        <img src={imageUrl} width="500px" height="auto" />
      </div>
    </div>
  );
};

export default Face;
