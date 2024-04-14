const Reservation = require('../Database/Models/Reservation');

module.exports = {
  createResservation: async (req, res) => {
    try {
      const {referance,client,clientPhone,hotelName,reservationDate,chek_in,checkout,nuberDays,numberRoums,total,payer,rest,cotisationHotel } = req.body;
      const {adminID}=req.params

      if (!start_date || !end_date || !hotelId) {
        return res.status(400).send({ error: 'Missing required fields' });
      }

      const result = await Reservation.create({ referance,client,clientPhone,hotelName,reservationDate,chek_in,checkout,nuberDays,numberRoums,total,payer,rest,cotisationHotel,adminID });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  },
};
