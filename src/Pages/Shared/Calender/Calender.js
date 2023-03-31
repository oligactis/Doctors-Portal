import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { DatePicker } from "@mui/x-date-pickers-pro/DatePicker";
// import { DatePicker } from '@mui/x-date-picker'
// import { DatePicker } from '@mui/x-date-picker/DatePicker'
// import { DatePicker } from '@mui/x-date-picker-pro'

const Calender = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" />
      </LocalizationProvider>
    );
};

export default Calender;