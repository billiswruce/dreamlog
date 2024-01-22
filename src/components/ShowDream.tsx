import { useState } from "react";
import { Dream } from "../models/Dream";

//underkomponent till DreamlogApp.tsx
export const ShowDream = () => {
  const handleClick = () => {
    setDream({ ...dream, isfulFilled: false });
  };

  const handleCheckboxChange = () => {
    setDream({ ...dream, isfulFilled: !dream.isfulFilled });
  };

  return (
    <>
      <h2>Dreams</h2>
      <h4>
        <input
          type="checkbox"
          checked={dream.isfulFilled}
          onChange={handleCheckboxChange}
        />
        {dream.name}{" "}
      </h4>
      <button onClick={handleClick}>Remove Dream</button>
      <button>Add New Dream</button>
    </>
  );
};
