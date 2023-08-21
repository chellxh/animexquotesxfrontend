import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewQuote } from "../common/API/quotesAPI";
import Button from "../common/Button/Button";
import "./NewForm.css";

function NewQuote() {
  const navigate = useNavigate();

  const [newQuote, setNewQuote] = useState({
    quote: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewQuote(newQuote);
      setNewQuote({
        quote: "",
      });
      alert(`New quote has been added!`);
      navigate(`/quotes`);
    } catch (e) {
      console.log(e);
    }
  }

  function handleTextChange(e) {
    setNewQuote({ ...newQuote, [e.target.id]: e.target.value });
  }
  return (
    <div className="newForm">
      <h2 className="newh2"> New Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Quote: </label>
          <textarea
            required
            type="text"
            id="name"
            name="name"
            value={NewQuote.quote}
            onChange={handleTextChange}
          />
        </div>

        <Button value={"Submit"} id={4} className={"button-submit"} />
      </form>
    </div>
  );
}

export default NewQuote;
