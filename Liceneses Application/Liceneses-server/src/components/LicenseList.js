// src/components/LicenseList.js

import React, { useState, useEffect } from 'react';
import { getLicenses } from '../services/licenseService';

const LicenseList = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    // Fetch licenses from the server or local storage
    const fetchedLicenses = getLicenses();
    setLicenses(fetchedLicenses);
  }, []);

  return (
    <div>
      <h2>Licenses</h2>
      {licenses.length === 0 ? (
        <p>No licenses found.</p>
      ) : (
        <ul>
          {licenses.map((license) => (
            <li key={license.id}>
              <div>
                <strong>License Number:</strong> {license.licenseNumber}
              </div>
              <div>
                <strong>Expiration Date:</strong> {license.expirationDate}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default LicenseList;


