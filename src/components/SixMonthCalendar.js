import React, { useState } from 'react';
import {
  format,
  addMonths,
  startOfMonth,
  getDaysInMonth,
  differenceInCalendarDays,
} from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SixMonthCalendar.css';

const SixMonthCalendar = () => {
  const [startMonth, setStartMonth] = useState(new Date());
  const [endMonth, setEndMonth] = useState(addMonths(new Date(), 5));

  const months = [];
  for (let d = new Date(startMonth); d <= endMonth; d = addMonths(d, 1)) {
    months.push(new Date(d));
  }

  return (
    <div>
      <div className="date-pickers">
        <div>
          <label>Start Month: </label>
          <DatePicker
            selected={startMonth}
            onChange={date => setStartMonth(startOfMonth(date))}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
        <div>
          <label>End Month: </label>
          <DatePicker
            selected={endMonth}
            onChange={date => setEndMonth(startOfMonth(date))}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Week No</th>
            <th>Days of the Week</th>
            <th>Event Particulars</th>
          </tr>
        </thead>
        <tbody>
          {months.map((month, index) => (
            <MonthCalendar key={index} month={month} startMonth={startMonth} />
          ))}
        </tbody>
      </table>
    </div>  
  );
};

const MonthCalendar = ({ month, startMonth }) => {
  const start = startOfMonth(month);
  const daysInMonth = getDaysInMonth(month);
  const weeks = [];
  const monthName = format(month, 'MMMM yyyy');

  let week = [];
  let showMonthName = true;
  let startDate = startOfMonth(startMonth);
  let initialWeekNo = Math.ceil(differenceInCalendarDays(start, startDate) / 7) + 1;

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = new Date(month.getFullYear(), month.getMonth(), day);
    week.push(
      <div key={currentDay} className={`day ${currentDay.getMonth() === month.getMonth() ? '' : 'other-month'}`}>
        {format(currentDay, 'd')}
      </div>
    );

    if (week.length === 7 || day === daysInMonth) {
      weeks.push(
        <tr key={day}>
          
          <td>{showMonthName ? monthName : ''}</td>
          <td>{initialWeekNo}</td>
          <td>{week}</td>

          <td>Event details here</td>
        </tr>
      );
      week = [];
      initialWeekNo++;
      showMonthName = false;
    }
  }

  return <>{weeks}</>;
};

export default SixMonthCalendar;
