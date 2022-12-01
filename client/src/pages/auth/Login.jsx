import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Login = () => {
  return (
    <div className="auth">
      <form className="auth-form">
        <h2>Log in</h2>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          className="form-input"
        />

        <div className="submit-box">
          <Button
            type="submit"
            variant="contained"
            style={{ padding: "8px 40px" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <Link to="/auth/register">Not registered?</Link>
      </form>
    </div>
  );
};

export default Login;
