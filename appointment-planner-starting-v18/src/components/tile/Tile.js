import React from "react";

export const Tile = ({ name, description }) => {

  const values = Object.values(description);
  console.log(values);

  return (
      <div className="tile-container">
          {values.map((value) => {
            return (<p className="tile-title">{name } Im a</p>)
          })}
      </div>
  );
};
