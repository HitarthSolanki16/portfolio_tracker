import React, { useState } from "react";
import axios from "../api/axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/forgot-password", { email });
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
