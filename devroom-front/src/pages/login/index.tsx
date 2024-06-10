import { Box, Container, SxProps, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";


const containerStyle: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

const boxStyle: SxProps = {
  bgcolor: "white",
  borderRadius: 2,
  px: 3,
  py: '6%',
  m: 20,
  width: 1 / 2,
  height: 400,
  alignItems: "center",
  justifyContent: "center",
};


function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setlogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const goToForgotPassword = () =>{}
  
  return (
    <Container sx={containerStyle}>
      <Box sx={boxStyle}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          fontWeight={"bolder"}
          mb={2}
          textAlign="center"
        >
          Login
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          name="email"
          value={login.email}
          label="E-mail"
          onChange={handleChange}
          type="email"
        />
        <TextField
          margin="normal"
          fullWidth
          id="password"
          name="password"
          value={login.password}
          label="Password"
          onChange={handleChange}
          type="password"
        />
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          textAlign="center"
          color="primary"
          onClick={goToForgotPassword}
          sx={{cursor:"pointer"}}
        >
          I forgot my password
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
