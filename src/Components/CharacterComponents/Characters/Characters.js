import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../common/Overlay/Overlay";

import { getAllCharacters } from "../../common/API/charactersAPI";
import "./Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    try {
      setIsLoading(true);
      let result = await getAllCharacters();
      setCharacters(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="characters">
        <h2>Characters</h2>
        <ul>
          {characters.map(({ id, name, image }) => {
            return (
              <li key={id}>
                <Link to={`/characters/${id}`}>
                  <img src={image} alt={name} />
                </Link>
                <br />
                <span className="caption">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Overlay>
  );
}

export default Characters;
