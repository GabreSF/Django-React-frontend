import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const API_BASE = 'http://127.0.0.1:8000/estoque';

const defaultTheme = createTheme();

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      if (isLogin) {
        const response = await fetch(`${API_BASE}/api/login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
          }),
        });

        if (response.ok) {
          console.log('Usuário logado com sucesso!');
          setTimeout(() => {
            navigate('/home'); 
          }, 2000);
        } else {
          console.error('Falha no login');
        }
      } else {
        const response = await fetch(`${API_BASE}/api/register/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
          }),
        });

        if (response.ok) {
          console.log('Usuário cadastrado com sucesso!');
          setTimeout(() => {
            navigate('/home'); 
          }, 2000);
        } else {
          console.error('Erro ao cadastrar usuário');
        }
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? 'Login' : 'Cadastro'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            {isLogin ? (
              <React.Fragment>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      autoComplete="given-name"
                      name="first_name"
                      required
                      fullWidth
                      id="first_name"
                      label="Nome"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      id="last_name"
                      label="Sobrenome"
                      name="last_name"
                      autoComplete="family-name"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  sx={{ mb: 2 }} 
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{ mb: 2 }} 
                />
              </React.Fragment>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-se de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? 'Entrar' : 'Inscrever-se'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin
                    ? "Não tem uma conta? Inscrever-se"
                    : 'já tem uma conta? Entrar'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
