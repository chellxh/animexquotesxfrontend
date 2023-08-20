import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getSingleShow, deleteShowById } from "../common/API/showsAPI";
import { dateFormatter } from "../common/helperFNs/helper";
import Button from "../common/Button/Button";
import "./SingleShow.css";

function SingleShow() {
  const [show, setShow] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchShowById();
  }, [id]);

  const fetchShowById = async () => {
    try {
      let result = await getSingleShow(id);
      setShow(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteShow = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this snack?"
    );

    if (confirmation) {
      try {
        let result = await deleteShowById(id);
        const { title } = result.data;
        alert(`The show ${title} has been deleted!`);
        navigate("/shows");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="show">
      <h2>Show</h2>
      {show && (
        <div className="showData">
          <h3>{show.title}</h3>
          <br />
          {show.image}
          <br />
          <p>Rating: {show.rating}</p>
          <p>Category: {show.category}</p>
          <p>Released Date: {dateFormatter(show.release_date)}</p>
        </div>
      )}

      <Button
        value={"Back"}
        id={1}
        className={"button-back"}
        onHandleClick={() => navigate("/shows")}
      />
      <Button
        value={"Edit"}
        id={2}
        className={"button-back"}
        onHandleClick={() => navigate(`/shows/${id}/edit`)}
      />
      <Button
        value={"Delete"}
        id={3}
        className={"button-back"}
        onHandleClick={() => deleteShow()}
      />
    </div>
  );
}

export default SingleShow;
