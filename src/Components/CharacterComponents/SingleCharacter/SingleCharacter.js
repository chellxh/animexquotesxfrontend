import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Overlay from "../../common/Overlay/Overlay";

import {
  getSingleCharacter,
  deleteCharacterById,
  getAllQuotesFromCharacter,
} from "../../common/API/charactersAPI";

import Button from "../../common/Button/Button";
import "./SingleCharacter.css";

function SingleCharacter() {
  const [character, setCharacter] = useState(null);
  const [characterQuotes, setCharacterQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacterById();
    fetchQuotesByCharacter();
  }, [id]);

  const fetchCharacterById = async () => {
    try {
      setIsLoading(true);
      let result = await getSingleCharacter(id);
      setCharacter(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const fetchQuotesByCharacter = async () => {
    try {
      setIsLoading(true);
      let result = await getAllQuotesFromCharacter(id);
      setCharacterQuotes(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      return e;
    }
  };

  const deleteCharacter = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this character?"
    );

    if (confirmation) {
      try {
        setIsLoading(true);
        let result = await deleteCharacterById(id);
        const { name } = result.data;
        alert(`The character ${name} has been deleted!`);
        navigate("/characters");
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }
  };
  return (
    <Overlay isLoading={isLoading}>
      <div className="character-container">
        <div className="character-box">
          <h2>Character</h2>
          {character && (
            <div className="characterData">
              <img src={character.image} alt={character.name} />
              <div className="h3Div">
                <h3>{character.name}</h3>
              </div>
              <div className="character-details">
                <p>Status: {character.status}</p>
                <p>Power Level: {character.power_lvl}</p>
                <h4>Quotes: </h4>
                <ul>
                  <span>
                    {characterQuotes.map(({ id, quote }) => {
                      return <li key={id}>{quote}</li>;
                    })}
                  </span>
                </ul>
              </div>
            </div>
          )}
          <div className="buttons">
            <Button
              value={"Back"}
              id={1}
              className={"button-back"}
              onHandleClick={() => navigate("/characters")}
            />
            <Button
              value={"Edit"}
              id={2}
              className={"button-edit"}
              onHandleClick={() => navigate(`/characters/${id}/edit`)}
            />
            <Button
              value={"Delete"}
              id={3}
              className={"button-delete"}
              onHandleClick={() => deleteCharacter()}
            />
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default SingleCharacter;
