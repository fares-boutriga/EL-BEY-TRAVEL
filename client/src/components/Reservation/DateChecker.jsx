import React, { useState } from 'react';

function PeriodSelector() {
  const [selectedPeriods, setSelectedPeriods] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState('');

  // Simulated data for periods
  const allPeriods = ['Period One', 'Period Two', 'Period Three', 'Period Four'];

  const handlePeriodSelect = (period) => {
    if (selectedPeriods.length < 2) {
      // Allow selecting up to two initial periods
      setSelectedPeriods([...selectedPeriods, period]);
    } else {
      // Check if the newly selected period belongs to either of the initial periods
      if (selectedPeriods.includes(period)) {
        alert(`Period ${period} is already selected.`);
      } else {
        alert(`Period ${period} does not belong to the initial selected periods.`);
      }
      // Reset the current period and selected periods
      setCurrentPeriod('');
      setSelectedPeriods([]);
    }
  };

  return (
    <div>
      <h2>Selected Periods: {selectedPeriods.join(', ')}</h2>
      <h2>Current Period: {currentPeriod}</h2>

      <h3>Select Periods:</h3>
      <ul>
        {allPeriods.map((period) => (
          <li key={period}>
            <button onClick={() => handlePeriodSelect(period)}>{period}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeriodSelector;
