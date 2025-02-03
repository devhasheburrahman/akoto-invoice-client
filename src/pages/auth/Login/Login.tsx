import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Base_Url } from "../../../config/config";

interface FormData {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please Type your email address"),
  password: yup.string().required("Please Type Your Password"),
});

export default function Login() {
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${Base_Url}/api/login`, data);

      // Store token in localStorage
      const { token } = response.data;
      localStorage.setItem("token", token);
      setSuccess("Login successful!");
      navigate("/app");
    } catch (error) {
      setErrorMessage((error as any).response?.data?.message || "Login failed");
    }
  };

  // Show password start
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // Show Password end

  return (
    <Box className="p-10 h-screen">
      <Paper className="h-full">
        <Box className="flex h-full gap-10 justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col p-10 w-[650px] gap-5 flex"
          >
            <Box className="text-center my-5 text-4xl font-semibold">
              Please Log In !!!
            </Box>

            <Box>
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </Box>
            <Box>
              <FormControl
                variant="filled"
                fullWidth
                error={Boolean(errors.password)}
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <p className="text-[red]">{errors.password.message}</p>
                )}
              </FormControl>
            </Box>

            <Button variant="contained" type="submit">
              Login
            </Button>
            <p className="text-red-500 text-center">{errorMessage}</p>

            <Box className="text-center">
              I have No Account, Please{" "}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </Box>
          </form>
          {/* image section */}
          <Box
            sx={{ backgroundImage: "url(/auth-bg.jpg)" }}
            className="flex-grow bg-cover bg-center bg-no-repeat h-full bg-blue-400"
          />
        </Box>
      </Paper>
    </Box>
  );
}
