import Axios from "./Axios";

const getAllCharacters = async () => {
  try {
    let result = await Axios.get("/characters");
    return result;
  } catch (e) {
    return e;
  }
};

const getSingleCharacter = async (id) => {
  try {
    let result = await Axios.get(`/characters/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const deleteCharacterById = async (id) => {
  try {
    let result = await Axios.delete(`/characters/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const updateCharacterById = async (id, character) => {
  try {
    let result = await Axios.put(`/characters/${id}`, character);
    return result;
  } catch (e) {
    return e;
  }
};

const createNewCharacter = async (newCharacter) => {
  try {
    let result = await Axios.post(`/characters`, newCharacter);
    return result;
  } catch (e) {
    return e;
  }
};

const getAllQuotesFromCharacter = async (id) => {
  try {
    let result = await Axios.get(`/characters/${id}/quotes/characters-quotes`);
    return result;
  } catch (e) {
    return e;
  }
};

export {
  getAllCharacters,
  getSingleCharacter,
  deleteCharacterById,
  updateCharacterById,
  createNewCharacter,
  getAllQuotesFromCharacter,
};
