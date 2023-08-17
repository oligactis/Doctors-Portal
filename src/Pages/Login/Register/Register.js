import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useNavigate();
    const { redirect, user, registerUser, isLoading, authError } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert("Your comfirm password not matched")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    if (user?.email)
        return redirect()
    else
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Name"
                                type='name'
                                name='name'
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your password"
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Confirm password"
                                type='password'
                                name='confirmPassword'
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <NavLink style={{ display: 'block', textDecoration: 'none' }} to="/login">
                                <Button style={{ color: '#0FCFEC' }} variant="text">Already Registerd? Please Login</Button>
                            </NavLink>
                            <Button style={{ background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)' }} sx={{ width: 300, m: 1 }} type='submit' variant='contained'>Register</Button>
                        </form>}
                        {isLoading && <CircularProgress sx={{ color: '#EB984E' }} />}
                        {user?.email && <Alert severity="success">User Created successful!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        );
};

export default Register;