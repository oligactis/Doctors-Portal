import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calender = ({date, setDate}) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
      // const date = dayjs('2023-04-01');
      // const startOfMonth = date.startOf('month');

          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
      />
    </LocalizationProvider>    
    );
};

export default Calender;