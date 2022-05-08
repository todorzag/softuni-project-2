const baseUrl = `http://localhost:3030/users`;

export const getUser = () => {
  let serializedUser = localStorage.getItem("user");
  if (serializedUser) {
    return JSON.parse(serializedUser);
  }
};

const saveUser = (user) => {
  if (user.accessToken) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const deleteUser = () => {
  localStorage.removeItem("user");
};

export const register = (email, password) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((user) => {
      saveUser(user);
      window.alert("Successful register");
      console.log(user);
      return user;
    })
    .catch((err) => window.alert(err));
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((user) => {
      saveUser(user);
      window.alert("Successful login");
      return user;
    })
    .catch((err) => window.alert(err));
};

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { "X-authorization": getUser().accessToken },
  })
    .then(() => {
      deleteUser();
      window.alert("Successful logout");
    })
    .catch((err) => window.alert(err));
