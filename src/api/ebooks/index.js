import { appConfig } from "../constants";

export const ebooks = {
  get: () =>
    new Promise((resolve, reject) => {
      fetch(
        `${appConfig.baseUrl}/books?authorId=${
          JSON.parse(localStorage.getItem("user")).id
        }`,
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
  getAll: () =>
    new Promise((resolve, reject) => {
      fetch(`${appConfig.baseUrl}/books`, {
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
  addSection: (id, data) => {
    return new Promise((resolve, reject) => {
      fetch(`${appConfig.baseUrl}/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    });
  },
  addBook: (data) => {
    return new Promise((resolve, reject) => {
      fetch(`${appConfig.baseUrl}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    });
  },
};
