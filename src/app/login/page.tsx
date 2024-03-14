"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "5rem",
    alignItems: "center",
  },
});

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    dispatch(login(data));
    console.log(data);
  };
  const getName = useSelector((state: RootState) => state.auth.user);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <Typography color="error">{errors.username.message}</Typography>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            // name="password"
            label="Password"
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <Typography color="error">{errors.password.message}</Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Log In
          </Button>
        </Box>
      </Paper>
      <Typography variant="caption">
        {getName?.username &&
          `Hi, ${getName?.username} you will be logged in shortly!`}
      </Typography>
    </Container>
  );
};

export default Login;
