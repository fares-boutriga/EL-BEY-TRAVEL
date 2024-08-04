import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import axios from "axios";

export default function PayModel({ open, setOpen, selected, data }) {
  const [montant, setMontant] = useState(0);
  const [paymentMode, setPaymentMode] = useState("espece");
  const [chequeNumber, setChequeNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const amounToPaid = () => {
      const selectedData = data.filter((e) => selected.includes(e.id));
      const totalMontant = selectedData.reduce(
        (sum, item) => sum + item.cotisationHotel,
        0
      );
      setMontant(totalMontant);
      return totalMontant;
    };
    amounToPaid();
  }, [data, selected]);
  const payedHotel=async ()=>{
    const today= new Date()
    try{
        await Promise.all(selected.map(async (x) => {
            await axios.put(`http://127.0.0.1:5000/app/reservation/pay/${x}`,{
                modePaymentHotel:paymentMode,
                checkNumber:chequeNumber,
                dateReglementHotel:today
            })
        }));
        alert('Les réservation Payer avec succès')

    }catch(error){
        console.log(error)
    }
  }

  const handleChange = (event, newValue) => {
    setPaymentMode(newValue);
    setError(""); // Clear error when payment mode is changed
  };

  const handleChequeNumberChange = (event) => {
    setChequeNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMode === "") {
      setError("Veuillez sélectionner un mode de paiement.");
      return;
    }
    if (paymentMode === "cheque" && chequeNumber === "") {
      setError("Veuillez entrer le numéro de chèque.");
      return;
    }
    payedHotel()
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Règlement des réservations</DialogTitle>
          <DialogContent>
            {selected.length} Réservation(s)
            <br />
            Montant à payer: {montant}DT
          </DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Mode de paiement</FormLabel>
                <Select
                  color="primary"
                  placeholder="Sélectionner la méthode"
                  size="md"
                  onChange={handleChange}
                  value={paymentMode}
                >
                  <Option value="cheque">Chèque</Option>
                  <Option value="espece">Espèce</Option>
                </Select>
              </FormControl>
              {paymentMode === "cheque" && (
                <FormControl>
                  <FormLabel>Numéro de Chèque</FormLabel>
                  <Input
                    autoFocus
                    required
                    value={chequeNumber}
                    onChange={handleChequeNumberChange}
                  />
                </FormControl>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
