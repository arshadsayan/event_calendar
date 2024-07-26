// src/components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ date, onSubmit, onClose }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const startDateTime = new Date(date);
        const [startHour, startMinute] = startTime.split(':').map(Number);
        startDateTime.setHours(startHour, startMinute);

        const endDateTime = new Date(date);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        endDateTime.setHours(endHour, endMinute);

        const newEvent = {
            title,
            start: startDateTime,
            end: endDateTime,
            description,
            type,
        };
        onSubmit(newEvent);
        onClose();
    };

    return (
        <div className="event-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Event Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Event Type:
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)}  />
                </label>
                <label>
                    Start Time:
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                </label>
                <label>
                    End Time:
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <div className="form-buttons">
                    <button type="submit">Add Event</button>
                    <button type="button" onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
