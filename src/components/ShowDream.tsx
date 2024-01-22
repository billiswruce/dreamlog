import { Dream } from "../models/Dream";

//underkomponent till DreamlogApp.tsx
//återanvändbar komponent
interface IShowDreamProps {
  dream: Dream;
  handleCheckbox: () => void;
}

export const ShowDream = (props: IShowDreamProps) => {
  const handleClick = () => {};

  return (
    <>
      <h2>Dreams</h2>
      <h4>
        <input
          type="checkbox"
          checked={props.dream.isfulFilled}
          onChange={props.handleCheckbox}
        />
        {props.dream.name}{" "}
      </h4>
      <button onClick={handleClick}>Remove Dream</button>
      <button>Add New Dream</button>
    </>
  );
};
