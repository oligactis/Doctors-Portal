import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e =>{
        const field =e.target.name;
        const value =e.target.value;
        // console.log(field,value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.comfirmPassword){
            alert("Your comfirm password not matched")
            return
        }
        e.preventDefault()
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt: 20}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>Register</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                type='Email'
                name='Email'
                onChange={handleOnChange}
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your password"
                type='password' 
                name='password'
                onChange={handleOnChange}
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Confirm password"
                type='password' 
                name='confirmPassword'
                onChange={handleOnChange}
                variant="standard" />

                <NavLink style={{display: 'block', textDecoration: 'none'}} to="/login">
                    <Button style={{color: '#0FCFEC'}} variant="text">Already Registerd? Please Login</Button>
                </NavLink>
                <Button style={{background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)'}} sx={{width: 300, m:1}} type='submit' variant='contained'>Login</Button>
            </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;