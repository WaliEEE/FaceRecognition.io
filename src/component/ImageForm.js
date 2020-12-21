import React, { Component } from "react";
import "tachyons";

const Form = ({ inputChange, buttonSubmit }) => {
  return (
    <div>
      <p className="f4 center">{"Check this BrainStorm Magic. Give it a Try "}</p>
      <div className="center pa3 br3 shadow-5">
        <input
          type="text"
          onChange={inputChange}
          className="pa3 ph3 br3 pv2 w-50 shadow-3"
        />
        <button
          onClick={buttonSubmit}
          className="w-15 grow dim pa2 ph3 pv2 br3 shadow-3 white bg-dark-blue"
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default Form;
