const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { products } = require("./data");

const PORT = process.env.PORT || 3001;

const app = express();

// Dummy user data
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
];

// check if token isValid
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.json({
      message: "unauthorized",
      user: req.user,
      isLoggedIn: false,
    });
  }

  jwt.verify(token, jwtSecretKey, (err, user) => {
    if (err) {
      return res.json({
        message: "unauthorized",
        user: req.user,
        isLoggedIn: false,
      });
    }
    req.user = user;
    next();
  });
};

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const jwtSecretKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjUxMDM4OSwiaWF0IjoxNzIyNTEwMzg5fQ.qqgynyi7yb_wz2GP9YktiNjzt81-MZIzNif28BGC7uc";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // User authenticated, generate a token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecretKey,
      { expiresIn: "1h" }
    );
    res.json({ message: "Login successful", token, success: true });
  } else {
    res.status(401).json({ message: "Invalid credentiapls" });
  }
});
app.post("/login-check", (req, res) => {
  authenticateToken(req, res, () =>
    res.json({ message: "Login successful", user: req.user, isLoggedIn: true })
  );
});
app.get("/products", (req, res) => {
  const { query: { id } = {} } = req;
  if (id) {
    res.json({ products: products.filter((product) => product.id === parseInt(id)) });
  }
  res.json({ products });
  // authenticateToken(req, res, () => res.json({ products }));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
