import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';
import { setDate } from 'date-fns';


const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacint={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '400px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;