import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Regsiter = () => {
  return (
    <div className="auth">
      <form className="auth-form">
        <h2>Regsitration</h2>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          type="number"
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Confirm"
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
            Register
          </Button>
        </div>
        <Link to="/auth/login">Log in</Link>
      </form>
    </div>
  );
};

export default Regsiter;
