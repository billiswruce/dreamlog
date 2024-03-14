import { Dream } from "../models/Dream";
import "./ShowDream.css";

interface IShowDreamProps {
  dream: Dream;
  dreamChecked: (name: string) => void;
  removeDream: (name: string) => void;
}

export const ShowDream = (props: IShowDreamProps) => {
  const handleCheckbox = () => {
    props.dreamChecked(props.dream.name);
  };

  return (
    <>
      <div className="dream-container">
        <input
          type="checkbox"
          checked={props.dream.isFulFilled}
          onChange={handleCheckbox}
          className="checkbox"
        />
        <h3 className={props.dream.isFulFilled ? "isFulFilled" : ""}>
          {props.dream.name}
        </h3>
        <button onClick={() => props.removeDream(props.dream.name)}>
          Move on!
        </button>
      </div>
    </>
  );
};
