import { useState } from "react";
import { ShowDream } from "./ShowDream";
import { Dream } from "../models/Dream";

//MAIN COMPONENT
export const DreamApp = () => {
  const [dream, setDream] = useState(new Dream(1, " Tågluff i Europa", false));

  return (
    <>
      <h1>DREAMLOG</h1>
      <ShowDream />
    </>
  );
};
