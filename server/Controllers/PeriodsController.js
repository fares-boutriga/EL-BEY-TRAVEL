const Periods = require('../Database/Models/Periods');

module.exports = {
  createPeriod: async (req, res) => {
    try {
      const { start_date, end_date, hotelId } = req.body;

      if (!start_date || !end_date || !hotelId) {
        return res.status(400).send({ error: 'Missing required fields' });
      }

      const result = await Periods.create({ start_date, end_date, hotelId });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  },
};
