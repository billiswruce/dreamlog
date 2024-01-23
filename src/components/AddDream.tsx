import { ChangeEvent, useState } from "react";
interface IAddDreamProps {
  addDream: (theNewDream: string) => void;
}
export const AddDream = (props: IAddDreamProps) => {
  const [newDream, setNewDream] = useState("");

  const handleClick = () => {
    if (newDream.trim() !== "") props.addDream(newDream);
    setNewDream("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDream(e.target.value);
  };

  return (
    <>
      <div className="input-btn-container">
        <input
          type="text"
          placeholder="Next Dream?"
          value={newDream}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};
