import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2>This is abailable appointments: {new Date(date).toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointments;