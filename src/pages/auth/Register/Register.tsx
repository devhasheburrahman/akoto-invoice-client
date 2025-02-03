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
  userName: string;
  email: string;
  phone: string;
  password: string;
}

const schema = yup.object({
  userName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^(?:\+8801\d{9}|01\d{9})$/, "Phone number is not valid")
    .required("Phone Number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must include at least one lowercase letter, one uppercase letter, and one digit"
    ),
});

export default function Register() {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const navigation = useNavigate();
  console.log(success, error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const response = await axios.post(`${Base_Url}/api/register`, data);
      setSuccess(response.data.message);
      navigation("/auth/login");
    } catch (error) {
      setError((error as any).response.data.message);
    }
  };

  // show hide password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className="p-10 ">
      <Paper className="h-full">
        <Box className="flex h-full gap-10 justify-center items-stretch">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col p-10 w-[650px] gap-5 flex"
          >
            <Box className="text-center my-5 text-4xl font-semibold">
              Register Now!!!
            </Box>
            <Box>
              <TextField
                variant="filled"
                fullWidth
                label="Your Name"
                {...register("userName")}
                error={Boolean(errors.userName)}
                helperText={errors.userName?.message}
              />
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
              <TextField
                type="text"
                variant="filled"
                fullWidth
                label="Phone Number"
                {...register("phone")}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
              />
            </Box>
            {/* <Box>
              <TextField
                variant="filled"
                fullWidth
                label="Address"
                {...register("address")}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
              />
            </Box> */}
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

            <Button variant="contained" type="submit">
              Registration
            </Button>
            <p className="text-red-500 text-center">{error}</p>
            <Box className="text-center">
              I have an Account
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </Box>
          </form>
          {/* image section */}
          <Box
            sx={{ backgroundImage: "url(/auth-bg.jpg)" }}
            className="flex-grow bg-cover bg-center bg-no-repeat  bg-blue-400"
          />
        </Box>
      </Paper>
    </Box>
  );
}
