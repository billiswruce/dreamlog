import { useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";
import { AddDream } from "./AddDream";
import Dreamlog from "../img/Dreamlog.svg";
import { v4 as uuidv4 } from "uuid";

//MAIN COMPONENT //

export const DreamApp = () => {
  const hardCodedValues = [
    new Dream(uuidv4(), "Bo i Japan", true),
    new Dream(uuidv4(), "Bestiga Mt.Fuji", true),
    new Dream(uuidv4(), "Äta 100 Semlor", false),
    new Dream(uuidv4(), "Bli bra på kod", false),
    new Dream(uuidv4(), "Lära mig Sticka", false),
  ];

  const [dreams, setDreams] = useState<Dream[]>(
    JSON.parse(
      localStorage.getItem("dreams") || JSON.stringify(hardCodedValues)
    )
  );

  const dreamChecked = (name: string) => {
    setDreams((prevDreams) => {
      const updatedDreams = prevDreams.map((dream) => {
        if (dream.name === name) {
          const updatedDream = { ...dream, isFulFilled: !dream.isFulFilled };
          return updatedDream;
        } else {
          return dream;
        }
      });

      updateLocalStorage(updatedDreams);
      return updatedDreams;
    });
  };

  const updateLocalStorage = (dreams: Dream[]) => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  };

  const addANewDream = (theNewDream: string) => {
    const newId = uuidv4();
    setDreams([...dreams, new Dream(newId, theNewDream, false)]);

    localStorage.setItem(
      "dreams",
      JSON.stringify([...dreams, new Dream(newId, theNewDream, false)])
    );
  };

  const removeDream = (name: string) => {
    setDreams([...dreams.filter((dream) => dream.name !== name)]);
    localStorage.setItem(
      "dreams",
      JSON.stringify([...dreams].filter((dream) => dream.name !== name))
    );
  };

  const sortedDreams = dreams.slice().sort((a, b) => {
    if (a.isFulFilled && !b.isFulFilled) {
      return -1;
    } else if (!a.isFulFilled && b.isFulFilled) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      <div className="background">
        <div className="container">
          <img src={Dreamlog} alt="Dreamlog Logo" className="logo" />
          <AddDream addDream={addANewDream} />
          <ul>
            {sortedDreams.map((dream) => (
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
