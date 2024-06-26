import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPeriodsId } from '../../features/periodSlice';

function OnePeriode({number,post,NPeriode,hotelId}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch=useDispatch()
  const navegate=useNavigate()


  useEffect(()=>{
    if(startDate&&endDate){
      postPeriode()
    }
  },[post])

  const postPeriode=()=>{
    axios.post('http://127.0.0.1:5000/app/perid/createPeriode',{
      start_date: startDate,
      end_date: endDate,
      hotelId: hotelId
    })
    .then(result=>{
      alert('done')
      dispatch(selectPeriodsId(result.data.id))
      navegate(`/Prices/${NPeriode}`)
    }).catch(err=>{ 
           console.log(`this is the star date ${startDate} and this is the end date ${endDate} and this the hotel id ${hotelId}`)

      console.log(err)
    })
  }
  return (
    <div className='onePeriode'>
      <h3>Periode {number}</h3>
      <div >
        <span>du</span>
        <input
        required={true}
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
        required={true}
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
