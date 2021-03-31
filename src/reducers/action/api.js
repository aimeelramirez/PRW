// to reuse api
let apiKey = process.env.REACT_APP_API_USERS_KEY;
// console.log("getting the api on api.js: ", process.env.REACT_APP_API_YOUTUBE)

export const getApi = async () => {
  //async await
  return await fetch("https://randomuser.me/api?results=25", {
    method: "GET",
    headers: {
      Authorization: "Client-ID " + apiKey,
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
  }).then((response) => response.json());
};
