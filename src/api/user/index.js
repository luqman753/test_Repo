import { appConfig } from "../constants";

export const userServices = {
  get: () =>
    new Promise((resolve, reject) => {
      fetch(`${appConfig.baseUrl}/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(async (res) => {
          let response = await res.json();
          if (res.ok) {
            resolve(response);
          } else {
            reject(new Error(response));
          }
        })
        .catch((error) => reject(error));
    }),
  getLoggedInUser: () =>
    new Promise((resolve, reject) => {
      fetch(
        `${appConfig.baseUrl}/users?id=${JSON.parse(
          localStorage.getItem("user")
        ).id``}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then(async (res) => {
          let response = await res.json();
          if (res.ok) {
            resolve(response);
          } else {
            reject(new Error(response));
          }
        })
        .catch((error) => reject(error));
    }),
};
