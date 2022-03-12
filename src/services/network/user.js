import axios from "axios";

export const getUsers = (username) => {
  // const usernameObject = username ? {username: username} : {};

  return axios.get(`https://jsonplaceholder.typicode.com/users`, {
    params: {
      // ...usernameObject,
      ...(username ? {username: username} : {})
    }
  });
}