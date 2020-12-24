import React, { Component } from "react";
import Tilt from "react-tilt";

export default function Logo() {
  return (
    <div className=" pl6 pt5 f5">
      <Tilt
        className="Tilt ba3 br3 shadow-5"
        options={{ max: 50 }}
        style={{
          height: 175,
          width: 175,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
      >
        <div className="Tilt-inner pa3">
          <img
            style={{ height: "125px", width: "125px" }}
            src="https://img.icons8.com/wired/100/000000/brain.png"
          />
        </div>
      </Tilt>
    </div>
  );
}
