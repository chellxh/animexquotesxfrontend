import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewShow } from "../common/API/showsAPI";
import Button from "../common/Button/Button";
import "./NewForm.css";

function NewShow() {
  const navigate = useNavigate();

  const [newShow, setNewShow] = useState({
    title: "",
    image: "",
    category: "",
    release_date: "",
    rating: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = await createNewShow(newShow);
      setNewShow({
        title: "",
        image: "",
        category: "",
        release_date: "",
        rating: "",
      });
      alert(`${newShow.title} has been added!`);
      navigate(`/shows/${result.data.id}`);
    } catch (e) {
      console.log(e);
    }
  }

  function handleTextChange(e) {
    setNewShow({ ...newShow, [e.target.id]: e.target.value });
  }
  return (
    <div className="newForm">
      <h2 className="newh2"> New Show</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={newShow.title}
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
            value={newShow.image}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={newShow.category}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="release_date">Released On: </label>
          <input
            required
            type="date"
            id="release_date"
            name="release_date"
            value={newShow.release_date}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            required
            type="number"
            min="1"
            max="5"
            id="rating"
            name="rating"
            value={newShow.rating}
            onChange={handleTextChange}
          />
        </div>
        <Button value={"Submit"} id={4} className={"button-submit"} />
      </form>
    </div>
  );
}

export default NewShow;
