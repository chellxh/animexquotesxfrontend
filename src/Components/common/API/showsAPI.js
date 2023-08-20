import Axios from "./Axios";

const getAllShows = async () => {
  try {
    let result = await Axios.get("/shows");
    return result;
  } catch (e) {
    return e;
  }
};

const getSingleShow = async (id) => {
  try {
    let result = await Axios.get(`/shows/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const deleteShowById = async (id) => {
  try {
    let result = await Axios.delete(`/shows/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const updateShowById = async (id) => {
  try {
    let result = await Axios.put(`/shows/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

const createNewShow = async () => {
  try {
    let result = await Axios.post(`/shows`);
    return result;
  } catch (e) {
    return e;
  }
};

export {
  getAllShows,
  getSingleShow,
  deleteShowById,
  updateShowById,
  createNewShow,
};
