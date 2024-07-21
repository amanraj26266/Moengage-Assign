import axios from "axios";

export const sendData = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/api/list", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
