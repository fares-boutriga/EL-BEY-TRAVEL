import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function KidsReduction() {
  const [values, setValues] = useState({
    bebe: "",
    petitDej: "",

  });
  useEffect(()=>{
    setValues({
        logementSimple: "",
        petitDej: "",
      })
  },[])
  const handleChange = (prop) => (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [prop]: event.target.value
    }));
  
    // Now, setPrices will use the updated state values

  }
  
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Réduction Enfants & 3éme lit Adulte
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="logementSimple"
          name="logementSimple"
          label="Logement simple"
          fullWidth
          variant="standard"
          type='float'
          value={values.logementSimple}
          onChange={handleChange('logementSimple')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="petitDej"
          name="petitDej"
          label="Petit dej"
          fullWidth
          variant="standard"
          type='number'
          value={values.petitDej}
          onChange={handleChange('petitDej')}
        />
      </Grid>
     
    <Button onClick={()=>console.log(values)} >clg supplementSuite</Button>
    </Grid>
  </React.Fragment>
  )
}

export default KidsReduction
