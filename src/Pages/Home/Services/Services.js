import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
  {
    name: 'Fluoride Tretment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi iure, doloribus aliquam iusto illum fugit tempora soluta dignissimos dolore.',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi iure, doloribus aliquam iusto illum fugit tempora soluta dignissimos dolore.',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi iure, doloribus aliquam iusto illum fugit tempora soluta dignissimos dolore.',
    img: whitening
  },
]





const Services = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography variant="h6" component="div" sx={{fontWeight: 500, color: 'success.main',m:2 }}>
          Our Services
        </Typography>
        <Typography sx={{fontWeight: 600, m:2}} variant="h4" component="div">
          Services We Provide
        </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              services.map(service => <Service
                key={service.name}
                service={service}
              ></Service>)
            }
          </Grid>  
        </Container>  
      </Box>
    );
};

export default Services;