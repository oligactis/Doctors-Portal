import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { redirect, user, loginUser, singInWithGoogle, isLoading, authError } = useAuth();

    // v 72.1 ----
    const location = useLocation();
    const history = useNavigate()
    // v 72.1 ----

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        // alert('hello')
        //----
        loginUser(loginData.email, loginData.password);
        //
        // console.log(loginUser)
        e.preventDefault()
    }
    const handleGoogleSingIn = () => {
        singInWithGoogle(location, history)
    }
    if (user?.email)
        return redirect()
    else
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Log in</Typography>
                        <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your password"
                                type='password'
                                name='password'
                                onChange={handleOnChange}
                                variant="standard" />
                            <NavLink style={{ display: 'block', textDecoration: 'none' }} to="/register">
                                <Button style={{ color: '#0FCFEC' }} variant="text">New User? please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress sx={{ color: '#EB984E' }} />}
                            {user?.email && <Alert severity="success">User Created successful!</Alert>}

                            {authError && <Alert severity="error">{authError}</Alert>}
                            <Button style={{ background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)' }} sx={{ width: 300, m: 1 }} type='submit' variant='contained'>Login</Button>
                        </form>
                        <Button onClick={handleGoogleSingIn} style={{ background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)' }} variant="contained">Google sing in</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        );
};

export default Login;