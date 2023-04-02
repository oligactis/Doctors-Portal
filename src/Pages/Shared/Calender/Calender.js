import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import dayjs from 'dayjs';

const Calender = ({date, setDate}) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
          // defaultValue={dayjs('lll')}
          date={date} onChange={(newDate) => setDate(newDate)}
      />
    </LocalizationProvider>    
    );
};

export default Calender;