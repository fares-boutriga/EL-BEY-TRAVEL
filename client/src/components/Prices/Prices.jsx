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
  const [prices,setPrices]=useState([])
  const handleSubmit = () => {
  console.log(prices)
  };

  const generateRows = (number) => {
    const rows = [];
    for (let i = 0; i < number; i++) {
      rows.push(<th key={i}>period {i + 1}</th>);
    }
    return rows;
  };
  
const handleInputChange=(value)=>{
  const indata=[...prices,value]
setPrices(indata)
}
  const generateColumns = (number) => {
    const columns = [];
    for (let i = 0; i < number; i++) {
      columns.push(
        <td key={i}>
          <input
          id='price'
            type="number"
            onBlur={(e) => {handleInputChange(e.target.value)}}
          />
        </td>
      );
    }
    return columns;
  };

  return (
    <div >
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
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  );
};

export default Prices;
