import Axios from "./Axios";

const getAllQuotes = async () => {
  try {
    let result = await Axios.get("/quotes");
    return result;
  } catch (e) {
    return e;
  }
};

const getSingleQuotes = async (id) => {
  try {
    let result = await Axios.get(`/quotes/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const deleteQuotesById = async (id) => {
  try {
    let result = await Axios.delete(`/quotes/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const updateQuotesById = async (id, quotes) => {
  try {
    let result = await Axios.put(`/quotes/${id}`, quotes);
    return result;
  } catch (e) {
    return e;
  }
};

const createNewQuote = async (newQuotes, characterId) => {
  try {
    let result = await Axios.post(`/quotes`, newQuotes, characterId);
    return result;
  } catch (e) {
    return e;
  }
};

export {
  getAllQuotes,
  getSingleQuotes,
  deleteQuotesById,
  updateQuotesById,
  createNewQuote,
};
