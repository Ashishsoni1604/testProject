const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcyMjUxMTI4NSwiZXhwIjoxNzIyNTE0ODg1fQ.reJvCRU-PumuAC85IESKxTu6JnerrcB6vADCZQ3zNn4");

export default async () => {
  return fetch("/products", {
    method: "GET",
    headers: myHeaders,
  }).then((res) =>
    res
      .json()
      .then((data) => data)
  );
};
