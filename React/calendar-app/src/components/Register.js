import * as React from 'react';
import { useState } from 'react';
import { Button, Avatar, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material';

import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Register() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const roles = ['User'];

  const [emailError, setEmailError] = useState('');

   const checkUserData = () => {
//     if (email === '') {
//       setEmailError('Email cannot be empty');
//       return false;
//     }

    if (password === '') return false;

    return true;
  };

  const signUp = (event) => {
    event.preventDefault();
    const checkData = checkUserData();

    if (!checkData) {
      alert('Please check your data');
      return;
    }

    axios
      .post('https://localhost:7211/api/User', {
        email: email,
        firstname: firstname,
        lastname: lastname,
        role: 'User',
        password: password,
      })
      .then((userData) => {
        const token = userData.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        navigate('/login');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" className="registerForm" onSubmit={signUp} noValidate sx={{ mt: 3 }}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={firstname}

              onChange={(e) => setFirstName(e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <Typography className="alert alert-danger">{emailError}</Typography>
            
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Register;