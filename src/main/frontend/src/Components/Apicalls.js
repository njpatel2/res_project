export function ApiCalls(url, method, data) {
    debugger;
    console.log(url ,method,data );
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  return fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
        console.log(responseData);
      return responseData; // Return the data to be used elsewhere
    })
    .catch((error) => {
      console.error("API call error:", error);
      throw error;
    });
}
