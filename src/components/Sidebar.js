// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles for the calendar

const Sidebar = ({ selectedDate, setSelectedDate }) => {

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="sidebar">
      <h3>My calendars</h3>
      <List>
        <ListItem>
          <Checkbox defaultChecked />
          <ListItemText primary="teaching day" />
        </ListItem>
        <ListItem>
          <Checkbox defaultChecked />
          <ListItemText primary="non-teaching day" />
        </ListItem>
        <ListItem>
          <Checkbox defaultChecked />
          <ListItemText primary="Events" />
        </ListItem>
      </List>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="react-calendar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
