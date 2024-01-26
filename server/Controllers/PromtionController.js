const Promotion = require('../Database/Models/Promotion');

module.exports = {
  createPromotion: async (req, res) => {
    try {
      const { start_date, end_date,percentage,amount,type, hotelId } = req.body;
        
    //   if (!start_date || !end_date || !hotelId) {
    //     return res.status(400).send({ error: 'Missing required fields' });
    //   }

      const result = await Promotion.create({ start_date, end_date,percentage,amount,type, hotelId  });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ error: err }); 
    }
  },
};
