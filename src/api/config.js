import axios from "axios";
import { history } from "component/layout/header/Header";
import { routes } from "util/routes";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response &&
      (error.response.status === 400 ||
        (error.response.status === 403 &&
          history.location.pathname !== routes.auth.signUp &&
          history.location.pathname !== routes.auth.signIn))
    ) {
      history.push({
        pathname: `/error/${error.response.status}`,
        state: { error: error },
      });
    } else if (!error.response) {
      history.push({
        pathname: `/network-error`,
        state: { error: error },
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
