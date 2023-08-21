import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Overlay from "../common/Overlay/Overlay";

import {
  getSingleCharacter,
  updateCharacterById,
  getAllQuotesFromCharacter,
} from "../common/API/charactersAPI";

import Button from "../common/Button/Button";
import "./Edit.css";

function EditCharacter() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    power_lvl: "",
    image: "",
    quote: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacterById = async () => {
      try {
        setIsLoading(true);
        let result = await getSingleCharacter(id);

        setCharacter(result.data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        navigate("/404");
      }
    };
    fetchCharacterById();
  }, [id]);

  const handleTextChange = (e) => {
    setCharacter({
      ...character,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateCharacterById(id, character);
      navigate(`/characters/${id}`);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <Overlay isLoading={isLoading}>
      <div className="editForm">
        <h2 className="edith2"> Edit Character</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Character Name: </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={character.name}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="status">Status: </label>
            <input
              type="text"
              id="status"
              name="status"
              value={character.status}
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
              value={character.power_lvl}
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
              value={character.image}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="quote">Quote: </label>
            <input
              type="text"
              id="quote"
              name="quote"
              value={character.quote}
              onChange={handleTextChange}
            />
          </div>
          <Button value={"Submit"} id={4} className={"button-submit"} />
        </form>
      </div>
    </Overlay>
  );
}

export default EditCharacter;
