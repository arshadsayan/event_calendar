// src/components/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyCalendar from './Calendar';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="dashboard">
      <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <MyCalendar selectedDate={selectedDate} />
    </div>
  );
};

export default Dashboard;
