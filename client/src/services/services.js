import API from "./axios";

export const postContactData = ({ endpoint, data }) => {
    return API.post(endpoint, data);
  };
  export const fetchData = ({ endpoint }) => {
    return API.get(endpoint);
  };
  