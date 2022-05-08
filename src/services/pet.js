import { getUser } from "./auth.js";

const baseUrl = `http://localhost:3030/data`;

export const validatePet = (pet) => {
  const requiredFields = ["name", "breed", "age", "weight", "image"];

  return requiredFields.some((x) => !pet[x]);
};

export const createPet = (pet) =>
  fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-authorization": getUser().accessToken,
    },
    body: JSON.stringify(pet),
  })
    .then(() => window.alert("Pet successfully created"))
    .catch((err) => window.alert(err));

export const getPet = (petId) =>
  fetch(`${baseUrl}/pets/${petId}`)
    .then((res) => res.json())
    .catch((err) => window.alert(err));

export const deletePet = (petId) => {
  fetch(`${baseUrl}/pets/${petId}`, {
    method: "DELETE",
    headers: {
      "X-authorization": getUser().accessToken,
    },
  })
    .then(() => window.alert("Pet successfully deleted"))
    .catch((err) => window.alert(err));
};

export const updatePet = (petId, pet) =>
  fetch(`${baseUrl}/pets/${petId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-authorization": getUser().accessToken,
    },
    body: JSON.stringify(pet),
  });
