// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventForm from './EventForm';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ selectedDate }) => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDate, setCurrentDate] = useState(selectedDate);

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(selectedDate);
    }
  }, [selectedDate]);

  const handleSelect = ({ start }) => {
    setCurrentDate(start);
    setShowForm(true);
  };

  const handleEventSubmit = (event) => {
    setEvents([...events, event]);
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const eventPropGetter = (event) => {
    let className = '';
    if (event.type === 'Holiday') {
      className = 'red-background'; 
    }
    return {
      className: className
    };
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        eventPropGetter={eventPropGetter} // Apply custom styles based on event properties
        date={currentDate}
        onNavigate={(date) => setCurrentDate(date)}
      />
      {showForm && <EventForm date={currentDate} onSubmit={handleEventSubmit} onClose={handleCloseForm} />}
    </div>
  );
};

export default MyCalendar;
