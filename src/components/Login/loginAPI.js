import { handleFirstResponse } from "../../utils/apuUtils";

export const LoginAPI = {
  login(credentials) {
    return fetch(
      "https://noroff-react-txt-forum-api.herokuapp.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    ).then(handleFirstResponse)
  }
};
