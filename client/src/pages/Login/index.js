import React, { useState } from "react";
import { pageStyle } from "./style";
/** @jsxImportSource @emotion/react */
import login from "../../actions/login";
import { TextField, Paper, Button } from "@mui/material";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInvalidError, setShowInvalidError] = useState("");
  const onLoginClick = () => {
    login({ username, password }).then(({ success }) => {
      if (success) {
        window.location.href = "/";
      } else {
        setShowInvalidError(true);
      }
    });
  };
  return (
    <div css={pageStyle}>
      <Paper elevation={3}>
        <h1 style={{ marginTop: 0 }}>Welcome to WholeSaleB2B</h1>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => {
            const value = event.target.value;
            setUsername(value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          type="password"
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
        <Button variant="contained" onClick={() => onLoginClick()}>
          LOGIN
        </Button>
        {showInvalidError && (
          <span style={{ color: "red" }}>Invalid credentials</span>
        )}
      </Paper>
    </div>
  );
};
export default Login;
