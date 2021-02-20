import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="dim fa3 pa3 underline pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="dim fa3 pa3 underline pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="dim fa3 pa3 underline pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigation;
