import axios from "axios";

export const fetchInfo = async (url) => {
  try {
    const data = await axios.get(url);
    if (!data) {
      return "ERROR";
    }
    return data;
  } catch (error) {
    return error;
  }
};
