import React from "react";
import {Table,TableBody,TableRow,TableCell,TableContainer,TableHead,Typography,Paper,Box} from "@mui/material";
import { useSelector } from "react-redux";

function BookingForm() {
  const roomData = useSelector((state) => state.roomData.values);
  const supplement = useSelector((state) => state.reservation.supplement);
  const checkInDate = useSelector((state) => state.reservation.reservationDate.checkInDate);
  const checkOutDate = useSelector((state) => state.reservation.reservationDate.checkOutDate);
  const daysNumber = useSelector((state) => state.reservation.daysNumber);
  const totalAmount = useSelector((state) => state.reservation.totalAmount);

  return (
    <Box>
      <Paper elevation={3} style={{ padding: 24, marginBottom: 50 }}>
        <Typography variant="h6" component="h2">
          Reservation Details
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date d'arrivée</TableCell>
                <TableCell>Date de départ</TableCell>
                <TableCell>Réservation</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Durée</TableCell>
                <TableCell>Prix</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{checkInDate}</TableCell>
                <TableCell>{checkOutDate}</TableCell>
                <TableCell>{`${roomData.length} chambre(s)`}</TableCell>
                <TableCell>{supplement}</TableCell>
                <TableCell>{`${daysNumber} jour(s)`}</TableCell>
                <TableCell>
                  <span>DT </span>
                  <span>{totalAmount}</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper style={{ padding: 24, marginBottom: 50 }}>
        <Typography variant="h6" component="h2">
          Chambres Details
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Chambre</TableCell>
                <TableCell>Nombres des adultes</TableCell>
                <TableCell>Nombre des enfants</TableCell>
                <TableCell>Âge des enfants</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomData.map((room, index) => (
                <TableRow key={index}>
                  <TableCell>{`Chambre ${index + 1}`}</TableCell>
                  <TableCell>{`${room.nAdult} adulte(s)`}</TableCell>
                  <TableCell>{`${room.nKids} enfant(s)`}</TableCell>
                  <TableCell>
                    {room.kidsAge?.length > 0 ? (
                      room.kidsAge.map((age, i) => (
                        <span key={i}>{`${age} ans`} {i < room.kidsAge.length - 1 && <br />}</span>
                      ))
                    ) : (
                      <span>-- aucun enfants  --</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          {roomData[0].baby&&<span style={{padding:'20px',fontSize:'16px',color:'red'}}>la reservation inclue un bébé</span>}
      </Paper>
    </Box>
  );
}

export default BookingForm;
