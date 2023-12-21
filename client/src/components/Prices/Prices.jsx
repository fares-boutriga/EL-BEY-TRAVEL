import React, {  useState } from 'react';
import { useParams } from "react-router-dom";

import './Prices.css';

const Prices = () => {
  const { NPeriode } = useParams();
  const [periods, setPeriods] = useState([
    { period: 'Logement simple' },
    { period: 'Petit dej' },
    { period: 'Demie pension' },
    { period: 'Pension complète' },
    { period: 'All-in soft (sans alcools)' },
    { period: 'All-in' },
    { period: 'supplément single' },
    { period: 'Supplément vue sur mer' },
    { period: 'Supplément suite' },
    { period: 'Supplément Noel' },
  ]);

  const handleSubmit = () => {
  console.log('done')
  };

  const generateRows = (number) => {
    const rows = [];
    for (let i = 0; i < number; i++) {
      rows.push(<th key={i}>period {i + 1}</th>);
    }
    return rows;
  };
  

  const generateColumns = (number) => {
    const columns = [];
    for (let i = 0; i < number; i++) {
      columns.push(
        <td key={i}>
          <input
          id='price'
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </td>
      );
    }
    return columns;
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            {generateRows(NPeriode)}
          </tr>
        </thead>
        <tbody>
          {periods.map((item, index) => (
            <tr key={index}>
              <td>{item.period}</td>
              {generateColumns(NPeriode)}
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Prices;
