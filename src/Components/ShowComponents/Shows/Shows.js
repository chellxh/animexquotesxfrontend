import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../common/Overlay/Overlay";

import { getAllShows } from "../../common/API/showsAPI";
import "./Shows.css";

function Shows() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchShows();
  }, []);

  async function fetchShows() {
    try {
      setIsLoading(true);
      let result = await getAllShows();
      setShows(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="shows">
        <h2>Shows</h2>
        <ul>
          {shows.map(({ id, title, image }) => {
            return (
              <li key={id}>
                <Link to={`/shows/${id}`}>
                  <img src={image} alt={title} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Overlay>
  );
}

export default Shows;
