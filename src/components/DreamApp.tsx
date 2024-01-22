import { useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";
import { AddDream } from "./AddDream";

//MAIN COMPONENT
export const DreamApp = () => {
  const [dreams, setDreams] = useState<Dream[]>([
    new Dream(1, " Tågluff i Europa", false),
    new Dream(2, " Bli bra på kod", false),
    new Dream(3, " Lära mig Sticka", false),
    new Dream(4, " Lära mig Spanska", false),
  ]);

  const dreamChecked = (name: string) => {
    setDreams(
      dreams.map((dream) => {
        if (dream.name === name) {
          return { ...dream, isFulFilled: !dream.isFulFilled };
        } else {
          return dream;
        }
      })
    );
  };

  const addANewDream = (theNewDream: string) => {
    setDreams([...dreams, new Dream(0, theNewDream, false)]);
  };

  return (
    <>
      <h1>DREAMLOG</h1>
      <AddDream addDream={addANewDream} />
      {dreams.map((dream) => {
        return (
          <ShowDream
            dreamChecked={dreamChecked}
            dream={dream}
            key={dream.name}
          />
        );
      })}
    </>
  );
};
