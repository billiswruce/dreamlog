import { useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";
import { AddDream } from "./AddDream";

//MAIN COMPONENT
export const DreamApp = () => {
  const [dreams, setDreams] = useState<Dream[]>([
    new Dream(1, " Bo i Japan", true),
    new Dream(2, " Bestiga Mt.Fuji", true),
    new Dream(3, " Tågluff i Europa", false),
    new Dream(4, " Bli bra på kod", false),
    new Dream(5, " Lära mig Sticka", false),
    new Dream(6, " Lära mig Spanska", false),
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

  const removeDream = (name: string) => {
    setDreams(dreams.filter((dream) => dream.name !== name));
  };

  return (
    <>
      {" "}
      <div className="container">
        <h1>DREAMLOG</h1>
        <AddDream addDream={addANewDream} />
        <ul>
          {dreams.map((dream) => (
            <li key={dream.name}>
              <ShowDream
                dreamChecked={dreamChecked}
                dream={dream}
                removeDream={removeDream}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
