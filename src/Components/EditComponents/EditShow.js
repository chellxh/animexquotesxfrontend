import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { getSingleShow, updateShowById } from "../common/API/showsAPI";
import Button from "../common/Button/Button";
import "./Edit.css";

function EditShow() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [show, setShow] = useState({
    title: "",
    image: "",
    category: "",
    release_date: "",
    rating: "",
  });

  useEffect(() => {
    const fetchShowById = async () => {
      try {
        let result = await getSingleShow(id);

        const date = new Date(result.data.release_date);
        result.data.release_date = date.toISOString().split("T")[0];

        setShow(result.data);
      } catch (e) {
        navigate("/404");
      }
    };
    fetchShowById();
  }, []);

  const handleTextChange = (e) => {
    setShow({
      ...show,
      [e.target.id]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateShowById(id, show);
      navigate(`/shows/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="editForm">
      <h2 className="edith2"> Edit Show</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={show.title}
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
            value={show.image}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={show.category}
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
            value={show.release_date}
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
            value={show.rating}
            onChange={handleTextChange}
          />
        </div>
        <Button value={"Submit"} id={4} className={"button-submit"} />
      </form>
    </div>
  );
}

export default EditShow;
