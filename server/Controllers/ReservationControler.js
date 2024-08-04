const sendMail = require('../Config/Nodemailer');
const Reservation = require('../Database/Models/Reservation');

// Function to calculate the new reference
function calculateReference(lastReservation) {
  if (lastReservation && lastReservation.id) {
    const lastReference = lastReservation.id;
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const dateStr = `${day}${month}${year}`;
    const newReferenceNumber = lastReference + 1;
    return `${newReferenceNumber}-${dateStr}`;
  } else {
    return '1-' + new Date().toISOString().slice(0, 10).replace(/-/g, '');
  }
}

module.exports = {
  createReservation: async (req, res) => {
    try {
      const { client, teleClient, hotelName, checkin, checkout, nombreJours, nombreChambres, total, payer, modePaymentHotel, reste, cotisationHotel, observation, hotelId, receivers } = req.body;
      const { adminId } = req.params;

      // Get the last reservation ordered by dateReservation in descending order
      const lastReservation = await Reservation.findOne({
        order: [['dateReservation', 'DESC']]
      });

      // Calculate the new reference
      const reference = calculateReference(lastReservation);

      // Send the email first
      try {
        await sendMail(receivers, checkin, checkout, client, reference, nombreChambres);
      } catch (emailError) {
        return res.status(500).json({ error: 'Failed to send email', message: emailError.message });
      }

      // If email is sent successfully, save the reservation
      const dateReservation = new Date();
      const result = await Reservation.create({
        reference, client, teleClient, hotelName, dateReservation, checkin, checkout, nombreJours, nombreChambres, total, payer, modePaymentHotel, reste, cotisationHotel, observation, hotelId, adminId
      });

      res.status(200).send(result);
    } catch (error) {
      console.log('this is the error', error);
      res.status(500).json({ error: 'Internal server error', message: error });
    }
  },
  getReservations: async (req, res) => {
    try {
      const result = await Reservation.findAll();
      res.status(201).send(result);
    } catch (error) {
      console.log('this is the error', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  payReservation: async (req, res) => {
    try {
      const { reservationId } = req.params;
      const { modePaymentHotel, checkNumber, dateReglementHotel } = req.body;

      const theReservation = await Reservation.findByPk(reservationId);
      if (!theReservation) {
        return res.status(404).send({ message: 'Reservation not found' });
      }

      await theReservation.update({ hotelPayer: true, modePaymentHotel, checkNumber, dateReglementHotel });
      res.status(200).send({ message: 'Reservation updated successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Internal server error', message: error });
    }
  }
};
