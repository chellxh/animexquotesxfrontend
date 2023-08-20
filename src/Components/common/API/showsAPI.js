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

export { getAllShows, getSingleShow };
