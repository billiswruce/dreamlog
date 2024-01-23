import { useEffect, useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";
import { AddDream } from "./AddDream";
import "./DreamApp.css";
import Dreamlog from "../img/Dreamlog.svg";

//MAIN COMPONENT //
export const DreamApp = () => {
  const storeDreams = JSON.parse(localStorage.getItem("dreams") || "[]");

  const listDreams = [
    new Dream(1, "Bo i Japan", true),
    new Dream(2, "Bestiga Mt.Fuji", true),
    new Dream(3, "Tågluff i Europa", false),
    new Dream(4, "Bli bra på kod", false),
    new Dream(5, "Lära mig Sticka", false),
  ];

  const [dreams, setDreams] = useState<Dream[]>(
    storeDreams.length > 0 ? storeDreams : listDreams
  );

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

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
    setDreams([...dreams, new Dream(dreams.length + 1, theNewDream, false)]);
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
