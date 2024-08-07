import React, { useEffect, useState } from "react";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Promotion = ({ hotelID,handleClose }) => {
  const [promotionType, setPromotionType] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [promotion, setPromotion] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setType(promotionType ? "amount" : "percentage");
  }, [promotionType]);

  const postNewPromotion = () => {
    axios
      .post("http://127.0.0.1:5000/app/promotion/createPromotion", {
        start_date: startDate,
        end_date: endDate,
        percentage: promotionType ? 0 : promotion,
        amount: promotionType ? promotion : 0,
        type: type,
        hotelId: hotelID,
      })
      .then((result) => {
        MySwal.fire({
          icon: "success",
          title: "Promotion ajoutée",
          text: "La promotion a été ajoutée avec succès !",
          customClass: {
            container: 'swal-container'
          } 
        });
        handleClose()
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: "Erreur",
          text: "Une erreur s'est produite lors de l'ajout de la promotion.",
          customClass: {
            container: 'swal-container'
          }
        });
        handleClose()
      });
  };

  return (
    <Card>
      <FormControlLabel
        control={
          <Switch
            checked={promotionType}
            onChange={() => setPromotionType(!promotionType)}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Pourcentage/Montant"
      />
      <CardContent>
        <form>
          <TextField
            id="start-date"
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            id="end-date"
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            onChange={(e) => setEndDate(e.target.value)}
          />
          {!promotionType ? (
            <TextField
              id="discount"
              label="Pourcentage de remise"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PercentIcon />
                  </InputAdornment>
                ),
                inputProps: { min: 0, max: 100 },
              }}
              fullWidth
              margin="normal"
              onChange={(e) => setPromotion(e.target.value)}
              value={promotion}
            />
          ) : (
            <TextField
              id="discount"
              label="Montant de la remise"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PaymentsIcon />
                  </InputAdornment>
                ),
                inputProps: { min: 0, max: 100 },
              }}
              fullWidth
              margin="normal"
              onChange={(e) => setPromotion(e.target.value)}
              value={promotion}
            />
          )}
        </form>
        <Button onClick={postNewPromotion}>Ajouter</Button>
      </CardContent>
    </Card>
  );
};

export default Promotion;
