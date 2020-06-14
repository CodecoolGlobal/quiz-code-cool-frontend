import axios from "axios";
import { history } from "component/layout/header/Header";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status !== 409) {  // Conflict, like "username / email already exists"
      const urlPart =
        error.response && error.response.status
          ? error.response.status
          : "networkerror";
      history.push({
        pathname: `/error/${urlPart}`,
        state: { error: error },
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
