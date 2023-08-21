import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewCharacter } from "../common/API/charactersAPI";
import Button from "../common/Button/Button";
import "./NewForm.css";

function NewCharacter() {
  const navigate = useNavigate();

  const [newCharacter, setNewCharacter] = useState({
    name: "",
    status: "",
    power_lvl: "",
    image: "",
    quote: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = await createNewCharacter(newCharacter);
      setNewCharacter({
        name: "",
        status: "",
        power_lvl: "",
        image: "",
        quote: "",
      });
      alert(`New character ${newCharacter.name} has been added!`);
      navigate(`/characters/${result.data.id}`);
    } catch (e) {
      console.log(e);
    }
  }

  function handleTextChange(e) {
    setNewCharacter({ ...newCharacter, [e.target.id]: e.target.value });
  }
  return (
    <div className="newForm">
      <h2 className="newh2"> New Character</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Character Name: </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={newCharacter.name}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status: </label>
          <input
            type="text"
            id="status"
            name="status"
            value={newCharacter.status}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="power_lvl">Power Level: </label>
          <input
            type="number"
            min="1"
            max="10"
            id="power_lvl"
            name="power_lvl"
            value={newCharacter.power_lvl}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            required
            type="text"
            id="image"
            name="image"
            value={newCharacter.image}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="quote">Quote: </label>
          <input
            type="text"
            id="quote"
            name="quote"
            value={newCharacter.quote}
            onChange={handleTextChange}
          />
        </div>
        <Button value={"Submit"} id={4} className={"button-submit"} />
      </form>
    </div>
  );
}

export default NewCharacter;
