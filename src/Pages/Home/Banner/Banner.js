import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Box } from '@mui/material';

const bannerBg = {
  background: `url(${bg})`
}

const verticalCenter = {
  display: 'flex',
  height: 400,
  alignItems: 'center'
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
          <Box>
            <Typography variant='h3' sx={{ fontWeight: 500 }}>
              Your new smile <br />
              Starts Here
            </Typography>
            <Typography variant='h6' sx={{ my: 3, fontSize: 15, color: 'lightcoral', fontWeight: 300 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, veniam repellat? Nulla culpa, dolorum doloribus magnam temporibus hic ut tenetur necessitatibus distinctio, assumenda dignissimos consequuntur!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: '400px' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;