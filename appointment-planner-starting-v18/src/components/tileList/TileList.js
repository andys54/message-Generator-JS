import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  return (
    <div>
        {contacts.forEach((value, index) => {
          const { name, ...description } = value;
          console.log(contacts);
          <Tile value={value} key={index} />
          console.log(name, description)
        })}
    </div>
  );
};
