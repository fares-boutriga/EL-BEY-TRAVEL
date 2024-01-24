import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PriceOnePer({setPrices,reload}) {
  const [values, setValues] = useState({
    logementSimple: "",
    petitDej: "",
    demiePension: "",
    pensionComplète: "",
    allInSoft: "",
    allIn: "",
    supplémentSingle: "",
    supplémentVueSurMer: "",
    supplémentSuite: "",
  });
  useEffect(()=>{
    setValues({
        logementSimple: "",
        petitDej: "",
        demiePension: "",
        pensionComplète: "",
        allInSoft: "",
        allIn: "",
        supplémentSingle: "",
        supplémentVueSurMer: "",
        supplémentSuite: ""
      })
  },[reload])
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPrices(values)
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
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
            type='number'
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="demiePension"
            name="demiePension"
            label="Demie pension"
            fullWidth
            variant="standard"
            type='number'
            value={values.demiePension}
            onChange={handleChange('demiePension')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pensionComplète"
            name="pensionComplète"
            label="Pension complète"
            fullWidth
            variant="standard"
            type='number'
            value={values.pensionComplète}
            onChange={handleChange('pensionComplète')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="all-in-s"
            name="all-in-s"
            label="All-in soft (sans alcools)"
            fullWidth
            variant="standard"
            type='number'
            value={values.allInSoft}
            onChange={handleChange('allInSoft')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="all-in"
            name="all-in"
            label="All-in"
            fullWidth
            variant="standard"
            type='number'
            value={values.allIn}
            onChange={handleChange('allIn')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="supplémentSingle"
            name="supplémentSingle"
            label="Supplément single"
            fullWidth
            variant="standard"
            type='number'
            value={values.supplémentSingle}
            onChange={handleChange('supplémentSingle')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="supplément-vue-sur-mer"
            name="supplément-vue-sur-mer"
            label="Supplément vue sur mer"
            fullWidth
            variant="standard"
            type='number'
            value={values.supplémentVueSurMer}
            onChange={handleChange('supplémentVueSurMer')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="supplémentSuite"
            name="supplémentSuite"
            label="Supplément suite"
            fullWidth
            variant="standard"
            type='number'
            value={values.supplémentSuite}
            onChange={handleChange('supplémentSuite')}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
