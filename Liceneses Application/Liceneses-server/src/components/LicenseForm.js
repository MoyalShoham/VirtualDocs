// src/components/LicenseForm.js

import React, { useState } from 'react';

const LicenseForm = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // Example: save license details, update database, etc.
    // Reset form fields
    setLicenseNumber('');
    setExpirationDate('');
  };

  return (
    <div>
      <h2>Add License</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          placeholder="License Number"
          required
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="Expiration Date"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default LicenseForm;
