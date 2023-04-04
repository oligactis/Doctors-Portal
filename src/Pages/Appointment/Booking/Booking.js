import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        
     <>
              <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{py:5}}>
              <Typography variant="h5" gutterBottom sx={{fontWeight: 600}}>
              {name}
            </Typography>
              <Typography variant="h6" gutterBottom sx={{fontWeight: 400}}>
              {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
          {space} SPACE AVAILABLE
        </Typography>
        <Button style={{background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)'}} onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
        </Paper>
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        ></BookingModal>
     </>
        
    );
};

export default Booking;