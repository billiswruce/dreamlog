import { useEffect, useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";
import { AddDream } from "./AddDream";
import Dreamlog from "../img/Dreamlog.svg";

//MAIN COMPONENT //

export const DreamApp = () => {
  const hardCodedValues = [
    new Dream(1, "Bo i Japan", true),
    new Dream(2, "Bestiga Mt.Fuji", true),
    new Dream(3, "Tågluff i Europa", false),
    new Dream(4, "Bli bra på kod", false),
    new Dream(5, "Lära mig Sticka", false),
  ];

  const [dreams, setDreams] = useState<Dream[]>(
    JSON.parse(
      localStorage.getItem("dreams") || JSON.stringify(hardCodedValues)
    )
  );

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
    setDreams([...dreams, new Dream(Dream.length + 1, theNewDream, false)]);

    localStorage.setItem(
      "dreams",
      JSON.stringify([
        ...dreams,
        new Dream(dreams.length + 1, theNewDream, false),
      ])
    );
  };

  const removeDream = (name: string) => {
    setDreams(dreams.filter((dream) => dream.name !== name));
  };

  return (
    <>
      {" "}
      <div className="background">
        <div className="container">
          <img src={Dreamlog} alt="Dreamlog Logo" className="logo" />
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
      </div>
    </>
  );
};
