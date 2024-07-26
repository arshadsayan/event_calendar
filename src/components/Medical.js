// src/components/MedicalForm.js
import React, { useState } from 'react';

const Medical = () => {
  const [reason, setReason] = useState('');
  const [duration, setDuration] = useState('');
  const [proofType, setProofType] = useState('');
  const [proofFile, setProofFile] = useState(null);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    // Determine proof type based on duration
    if (parseInt(e.target.value) <= 7) {
      setProofType('Medical Proof');
    } else {
      setProofType('Medical Report');
    }
  };

  const handleProofFileChange = (e) => {
    const file = e.target.files[0];
    setProofFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log({
      reason,
      duration,
      proofType,
      proofFile
    });
    // Reset form fields after submission (if needed)
    setReason('');
    setDuration('');
    setProofType('');
    setProofFile(null);
  };

  return (
    <div className="medical-form">
      <h2>Medical Leave Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={handleReasonChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (days):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={handleDurationChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="proof">Proof ({proofType}):</label>
          <input
            type="file"
            id="proof"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleProofFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Medical;
