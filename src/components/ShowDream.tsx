import { Dream } from "../models/Dream";

//underkomponent till DreamlogApp.tsx
//återanvändbar komponent
interface IShowDreamProps {
  dream: Dream;
  dreamChecked: (name: string) => void;
}

export const ShowDream = (props: IShowDreamProps) => {
  const handleClick = () => {
    props.dreamChecked(props.dream.name);
  };

  const addDream = () => {};

  return (
    <>
      <h2>Dreams</h2>
      <h4 className={props.dream.isFulFilled ? "isFulFilled" : ""}>
        {props.dream.name}
      </h4>
      <button onClick={handleClick}>Dream DONE!</button>
      <button>Ta bort Dröm</button>
    </>
  );
};
