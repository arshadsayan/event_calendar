import React, { useState, useEffect } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const startDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    // Get the number of days in the previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Add days from the previous month
    for (let i = startDay; i > 0; i--) {
      daysArray.push({
        day: daysInPrevMonth - i + 1,
        isCurrentMonth: false
      });
    }

    // Add days from the current month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        day: i,
        isCurrentMonth: true
      });
    }

    // Add days from the next month
    const remainingDays = 42 - daysArray.length; // Ensure the calendar has 6 weeks
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({
        day: i,
        isCurrentMonth: false
      });
    }

    setDays(daysArray);
  }, [currentDate]);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={goToPreviousMonth}>{"<"}</button>
        <h2>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h2>
        <button onClick={goToNextMonth}>{">"}</button>
      </div>
      <div className="days">
        {dayNames.map(day => (
          <div className="day-name" key={day}>{day}</div>
        ))}
        {days.map((dayObj, index) => (
          <div
            className={`day ${dayObj.isCurrentMonth ? 'current-month' : 'other-month'}`}
            key={index}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
