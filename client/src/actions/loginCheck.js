

export default async () => {
  const myHeaders = new Headers();
  const authToken = window.localStorage.getItem("auth-token");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", authToken);
  return fetch("/login-check", {
    method: "POST",
    headers: myHeaders,
  }).then((res) =>
  res
    .json()
    .then(({ isLoggedIn }) => {
      return isLoggedIn
    })
    .catch((err) => {
      console.log(err);
    })
);
};
