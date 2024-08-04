import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import PaymentsIcon from "@mui/icons-material/Payments";
import Checkbox from "@mui/material/Checkbox";
import PercentIcon from "@mui/icons-material/Percent";
import { Button, Card, CardContent, InputAdornment, Switch } from "@mui/material";
import axios from "axios";

function KidsReduction({ hotelID }) {
  const [baby, setBaby] = useState(0);
  const [towKisTowAdult, setTowKisTowAdult] = useState(0);
  const [towKisOneAdult, setTowKisOneAdult] = useState(0);
  const [maxThreeKids, setMaxThreeKids] = useState(0);
  const [theardBad, setTheardBad] = useState(0);
  const [promotionTypePrcentage, setPromotionTypePrcentage] = useState(false);

  const handleChange = (setter) => (event) => {
    let value = event.target.value;
    // Validate the value to be between 0 and 100
    if (promotionTypePrcentage && value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    setter(value);
  };

  const createRoomPromo = async () => {
    try {
      // Prepare data to send
      const valuesToSend = {
        baby: promotionTypePrcentage ? baby / 100 : baby,
        towKisTowAdult: promotionTypePrcentage ? towKisTowAdult / 100 : towKisTowAdult,
        towKisOneAdult: promotionTypePrcentage ? towKisOneAdult / 100 : towKisOneAdult,
        maxThreeKids: promotionTypePrcentage ? maxThreeKids / 100 : maxThreeKids,
        theardBad: promotionTypePrcentage ? theardBad / 100 : theardBad,
        promotionType:promotionTypePrcentage
      };

      // Make the API call
      await axios.post(`http://127.0.0.1:5000/app/roomPromo/add/${hotelID}`, valuesToSend);

      // Reset form values after successful API call
      setBaby(0);
      setTowKisTowAdult(0);
      setTowKisOneAdult(0);
      setMaxThreeKids(0);
      setTheardBad(0);

      alert("API call successful");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request. Please try again later.");
    }
  };

  return (
    <Card>
      <CardContent>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Réduction Enfants & 3éme lit Adulte
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={promotionTypePrcentage}
                onChange={() => {
                  setPromotionTypePrcentage(!promotionTypePrcentage);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label={promotionTypePrcentage ? "Pourcentage" : 'Montant'}
            style={{ padding: '0px 10px 15px 15px' }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id=""
                name=""
                label="Bébé de 00 à 02 ans (1 Bébé par chambre)"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {promotionTypePrcentage ? (
                        <PercentIcon />
                      ) : (
                        <PaymentsIcon />
                      )}
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, max: 100 },
                }}
                type="number"
                value={baby}
                onChange={handleChange(setBaby)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="towKisTowAdult"
                name="towKisTowAdult"
                label="1 Enfant de 2 à 12 ans avec 2 adult"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {promotionTypePrcentage ? (
                        <PercentIcon />
                      ) : (
                        <PaymentsIcon />
                      )}
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, max: 100 },
                }}
                type="number"
                value={towKisTowAdult}
                onChange={handleChange(setTowKisTowAdult)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="towKisOneAdult"
                name="towKisOneAdult"
                label="1 Enfant de 2 à 12 ans avec 1 adult"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {promotionTypePrcentage ? (
                        <PercentIcon />
                      ) : (
                        <PaymentsIcon />
                      )}
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, max: 100 },
                }}
                type="number"
                value={towKisOneAdult}
                onChange={handleChange(setTowKisOneAdult)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="maxThreeKids"
                name="maxThreeKids"
                label="Max 3 Enfants de 2 à 12 ans une chambre séparéé ou communicant"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {promotionTypePrcentage ? (
                        <PercentIcon />
                      ) : (
                        <PaymentsIcon />
                      )}
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, max: 100 },
                }}
                type="number"
                value={maxThreeKids}
                onChange={handleChange(setMaxThreeKids)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="theardBad"
                name="theardBad"
                label="3éme Lit adult"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {promotionTypePrcentage ? (
                        <PercentIcon />
                      ) : (
                        <PaymentsIcon />
                      )}
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, max: 100 },
                }}
                type="number"
                value={theardBad}
                onChange={handleChange(setTheardBad)}
              />
            </Grid>
          </Grid>
          <Button onClick={createRoomPromo}>Ajouter</Button>
        </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default KidsReduction;
