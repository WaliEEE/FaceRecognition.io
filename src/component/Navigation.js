import React, { Component } from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("SignIn")}
        className="dim fa3 pa3 underline pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
