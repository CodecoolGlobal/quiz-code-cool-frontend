import axios from 'axios';
import {actualHistory} from "component/authentication/AuthForm"


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    if (actualHistory.location.pathname === "/sign-in")
        actualHistory.push("/sign-up")

  });

export default axios;