import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const theme = createTheme();
const defaultTheme = createTheme();

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    axios
      .post('https://localhost:7211/api/User/Login', {
        email: email,
        password: password,
      })
      .then((userData) => {
        var token = userData.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        navigate('/events');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="login">
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
        sx={{
            marginTop:8,
            display:'flex',
            flexDirection:'column',
            alignltems:'center',
            boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',
            borderRadius:'10px',
            padding:'20px',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        
          <div className="log" >
            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                sx={{ marginBottom: 1 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                autoComplete="current-password"
                sx={{ marginBottom: 1 }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ marginBottom: 1 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={login}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                  {"New User?"}<strong> <a href="/">Register</a></strong>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Login;