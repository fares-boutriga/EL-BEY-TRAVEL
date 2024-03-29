import React, { useState, createContext, useContext } from 'react';
import './CreatePeriods.css';
import OnePeriode from './OnePeriode';
import { Link } from 'react-router-dom';

function CreatePeriods({hotelId}) {
  const [NPeriode, setNPeriode] = useState(3);
  const [post,setPost]=useState(false)

  const renderPeriodes = () => {
    const periodes = [];
    for (let i = 0; i < NPeriode; i++) {
      periodes.push(<OnePeriode key={i} number={i+1} post={post} NPeriode={NPeriode} hotelId={hotelId} />);
    }
    return periodes;
  };

  return (
    <div className='page'>
      <div className='createPeriode'>
        <div>
          <span>Selectionnez le nombre des périodes</span>
          <input
            type="number"
            max={12}
            min={3}
            value={NPeriode}
            onChange={(e) => {
              setNPeriode(e.target.value);
            }}
          />
        </div>
        <div>
          {renderPeriodes()}
          <Link to={'/'}><button >Return  </button></Link>
          {/* <Link to={`/Prices/${NPeriode}`}> */}
            <button onClick={()=>{setPost(!post)}}>Suivant </button>
            {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CreatePeriods;
