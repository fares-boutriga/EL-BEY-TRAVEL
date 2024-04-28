const Reservation = require('../Database/Models/Reservation');

module.exports = {
  createResservation: async (req, res) => {
    try {
      const {referance,client,teleClient,hotelName,chekin,checkout,nombreJours,nombreChambres,total,payer,reste,cotisationHotel,observation,hotelId } = req.body;
      const {adminId}=req.params

     
      const dateReservation = new Date();
      const result = await Reservation.create({ referance,client,teleClient,hotelName,dateReservation,chekin,checkout,nombreJours,nombreChambres,total,payer,reste,cotisationHotel,observation,hotelId,adminId });
      res.status(200).send(result);
    } catch (error) {
      console.log('this is is the error',error)
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
