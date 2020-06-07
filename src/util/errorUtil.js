export const handleError = (error) => {

  let message = `Something went wrong! :(` 
  if (error.response) {
      if (error.response.status === 403) {

        return;
      }
      const errorResponseData = error.response.data
      message += `\nMessage: ${errorResponseData.message}\nTime: ${errorResponseData.timestamp}`
  } else {
    // Network error
    message += `\n${error}`;
  }
  alert(message);
  };
  