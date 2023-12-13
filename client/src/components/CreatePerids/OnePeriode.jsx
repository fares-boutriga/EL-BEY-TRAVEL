import React, { useState } from 'react';

function OnePeriode({number}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className='onePeriode'>
      <h3>Periode {number}</h3>
      <div >
        <span>du</span>
        <input
          type="date"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          value={startDate}
        />
      </div>
      <div >
        <span>au</span>
        <input
          type="date"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          value={endDate}
        />
      </div>
    </div>
  );
}

export default OnePeriode;
