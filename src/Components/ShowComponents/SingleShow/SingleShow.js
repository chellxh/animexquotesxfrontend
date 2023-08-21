import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Overlay from "../../common/Overlay/Overlay";

import {
  getSingleShow,
  deleteShowById,
  getAllCharacterFromShow,
} from "../../common/API/showsAPI";
import { dateFormatter } from "../../common/helperFNs/helper";
import Button from "../../common/Button/Button";
import "./SingleShow.css";

function SingleShow() {
  const [show, setShow] = useState(null);
  const [showCharacters, setShowCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchShowById();
    fetchCharactersInShow();
  }, [id]);

  const fetchShowById = async () => {
    try {
      setIsLoading(true);
      let result = await getSingleShow(id);
      setShow(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const fetchCharactersInShow = async () => {
    try {
      setIsLoading(true);
      let result = await getAllCharacterFromShow(id);
      setShowCharacters(result.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const deleteShow = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this show?"
    );

    if (confirmation) {
      try {
        setIsLoading(true);
        let result = await deleteShowById(id);
        const { title } = result.data;
        alert(`The show ${title} has been deleted!`);
        navigate("/shows");
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }
  };
  return (
    <Overlay isLoading={isLoading}>
      <div className="showPage">
        <div className="show-container">
          <div className="show-box">
            <h2>Show</h2>
            {show && (
              <div className="showData">
                <img src={show.image} alt={show.title} />
                <div className="h3Div">
                  <h3>{show.title}</h3>
                </div>
                <div className="show-details">
                  <p>Rating: {show.rating}</p>
                  <p>Category: {show.category}</p>
                  <p>Released Date: {dateFormatter(show.release_date)}</p>
                </div>
              </div>
            )}
            <div className="buttons">
              <Button
                value={"Back"}
                id={1}
                className={"button-back"}
                onHandleClick={() => navigate("/shows")}
              />
              <Button
                value={"Edit"}
                id={2}
                className={"button-edit"}
                onHandleClick={() => navigate(`/shows/${id}/edit`)}
              />
              <Button
                value={"Delete"}
                id={3}
                className={"button-delete"}
                onHandleClick={() => deleteShow()}
              />
            </div>
          </div>
        </div>
        <div className="characterList">
          <h4>Characters</h4>
          <ul>
            {showCharacters?.map(({ id, name }) => {
              return (
                <li key={id}>
                  <Link to={`/characters/${id}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Overlay>
  );
}

export default SingleShow;
