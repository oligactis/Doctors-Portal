import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
  const { name, time } = booking;
  // v 72.2
  const { user } = useAuth();
  // v 72.2
  // v 72.4 
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo }
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }
  // v 72.4 
  const handleBookingSubmit = (e) => {
    e.preventDefault()
    // alert("Submitting"); // 72.4 eita dorkar naiekhon r 
    // collect data
    // v 72.4
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    console.log(appointment)
    // v 72.4 
    // send to the server
    // v 72.5 
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.acknowledged) {
          setBookingSuccess(true)
          handleBookingClose();
        }
      })
    // v 72.5 

  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='patientName' // v 72.4 line
              onBlur={handleOnBlur}// v 72.4 line
              defaultValue={user.displayName} //v 72.2
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='email' // v 72.4 line
              onBlur={handleOnBlur}// v 72.4 line
              defaultValue={user.email} // v 72.2
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='phone'// v 72.4 line
              onBlur={handleOnBlur}  // v 72.4 line
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              defaultValue={new Date(date).toDateString()}
              // new Date(date).toDateString()
              size="small"
            />
            <Button style={{ background: 'linear-gradient(90deg,#19D3AE,#0FCFEC)' }} type='submit' variant="contained">Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;