import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PercentIcon from "@mui/icons-material/Percent";
import PaymentsIcon from "@mui/icons-material/Payments";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react";

const NoilPrice = ({hotelId}) => {
  const [noil,setNoil]=useState('')
  const [saintSylvester,setSaintSylvester]=useState('')

  const postPrices=(event)=>{
    event.preventDefault()
    axios.post(`http://127.0.0.1:5000/app/noil/createNoil/${hotelId}`,{
      noil:noil,
      saintSylvester:saintSylvester
    }).then(result=>{
      console.log(result)
      alert('ajouter avec sucssi')
    })
    .catch(err=>{
      alert('err')
      console.log(err)
    })
  }

useEffect(()=>{console.log(hotelId)})
  return (
    <Card>
      <CardContent>
        <form onSubmit={postPrices}>
          <TextField
            id="noil"
            label="Noil"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
            onChange={(e)=>{setNoil(e.target.value)}}
            required
          />
          <TextField
            id="saintSylvester"
            label="Saint Sylvester"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
            onChange={(e)=>{setSaintSylvester(e.target.value)}}
            required
          />
        <Button type="submit">Ajouter</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoilPrice;

