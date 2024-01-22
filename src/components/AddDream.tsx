import { ChangeEvent, useState } from "react";

interface IAddDreamProps {
  addDream: (theNewDream: string) => void;
}
export const AddDream = (props: IAddDreamProps) => {
  const [newDream, setNewDream] = useState("");

  const handleClick = () => {
    props.addDream(newDream);
    setNewDream("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDream(e.target.value);
  };

  return (
    <>
      <input type="text" value={newDream} onChange={handleChange} />
      <button onClick={handleClick}>Add new Dream</button>
    </>
  );
};
