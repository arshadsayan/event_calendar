import React, { useState } from 'react';
import './CalendarComponent.css'; // Assuming you have a CSS file for styling

const CalendarComponent = () => {
  // Initialize state for the selected date, defaulting to today
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to get the days in a month for a given year and month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to handle click on a date cell
  const handleDateClick = (day) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
    // You can perform any actions when a date is clicked, such as fetching events for that date
  };

  // Function to render the calendar grid
  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Create an array for all days in the month
    let days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    // Create an array for rendering the calendar grid
    let calendarGrid = [];

    // Fill the grid with empty cells before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    // Fill the grid with day cells
    days.forEach((day) => {
      const classNames = `calendar-cell ${day === selectedDate.getDate() ? 'selected' : ''}`;
      calendarGrid.push(
        <div key={day} className={classNames} onClick={() => handleDateClick(day)}>
          {day}
        </div>
      );
    });

    return calendarGrid;
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
            {'<'}
          </button>
          <div className="calendar-title">
            {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
            {'>'}
          </button>
        </div>
        <div className="calendar-body">
          <div className="calendar-row header">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-cell header">{day}</div>
            ))}
          </div>
          <div className="calendar-row">{renderCalendar()}</div>
        </div>
      </div>
    </div>
  );
};

      export default CalendarComponent;
