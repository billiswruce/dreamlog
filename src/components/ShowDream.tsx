import { ChangeEvent } from "react";
import { Dream } from "../models/Dream";
import "./ShowDream.css";

//underkomponent till DreamlogApp.tsx
//återanvändbar komponent
interface IShowDreamProps {
  dream: Dream;
  dreamChecked: (name: string) => void;
}

export const ShowDream = (props: IShowDreamProps) => {
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    props.dreamChecked(props.dream.name);
  };

  return (
    <>
      <div className="dream-container">
        <input
          type="checkbox"
          checked={props.dream.isFulFilled}
          onChange={handleCheckbox}
        />
        <h3 className={props.dream.isFulFilled ? "isFulFilled" : ""}>
          {props.dream.name}
        </h3>

        <button>Move on!</button>
      </div>
    </>
  );
};
