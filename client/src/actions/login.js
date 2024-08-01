const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  username: "admin",
  password: "admin",
});

export default ({ username, password }) => {
  return fetch("/login", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) =>
    res
      .json()
      .then((data) => {
        window.localStorage.setItem('auth-token', data.token)
        return data;
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
