import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/lists");
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getListById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/list/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
