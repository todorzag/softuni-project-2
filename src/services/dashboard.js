const baseUrl = `http://localhost:3030/data`;

export const getPets = () =>
  fetch(`${baseUrl}/pets?sortBy=_createdOn%20desc&distinct=name`)
    .then((res) => res.json())
    .catch((err) => window.alert(err));
