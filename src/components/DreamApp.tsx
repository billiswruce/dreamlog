import { useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";

//MAIN COMPONENT
export const DreamApp = () => {
  const [dreams, setDreams] = useState<Dream[]>([
    new Dream(1, " Tågluff i Europa", false),
    new Dream(2, " Bli en grym programmerare", false),
    new Dream(3, "Lära mig Sticka", false),
  ]);

  // const handleClick = () => {
  //   setDream({ ...dream, isfulFilled: false });
  // };

  const dreamChecked = (name: string) => {
    setDreams(
      dreams.map((dream) => {
        if (dream.name === name) {
          return { ...dream, isFulFilled: true };
        } else {
          return dream;
        }
      })
    );
  };

  return (
    <>
      <h1>DREAMLOG</h1>
      {dreams.map((dream) => {
        return (
          <ShowDream
            dream={dream}
            dreamChecked={dreamChecked}
            key={dream.name}
          />
        );
      })}
    </>
  );
};
