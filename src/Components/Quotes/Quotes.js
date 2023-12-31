import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Overlay from "../common/Overlay/Overlay";

import { getAllQuotes } from "../common/API/quotesAPI";
import "./Quotes.css";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    try {
      setIsLoading(true);
      let result = await getAllQuotes();
      setQuotes(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="quotes">
        <h2>Quotes</h2>
        <ul>
          {quotes.map(({ id, quote }) => {
            return (
              <li key={id}>
                <Link to={`/characters/${id}`}>
                  <p>{quote}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Overlay>
  );
}

export default Quotes;
