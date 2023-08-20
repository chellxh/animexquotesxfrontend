import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllShows } from "../common/API/showsAPI";

function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  async function fetchShows() {
    try {
      let result = await getAllShows();
      setShows(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="shows">
      <h2>Shows</h2>
      <ul>
        {shows.map(({ id, title, image, rating }) => {
          return (
            <li key={id}>
              <Link to={`/shows/${id}`}>{title}</Link> - {rating}
              <br />
              <Link to={`/shows/${id}`}>{image}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shows;
