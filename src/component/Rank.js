import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f4 center">
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f4 center">{entries}</div>
    </div>
  );
};

export default Rank;
