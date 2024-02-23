const Hotel = require('../Database/Models/Hotels');
const Prices = require('../Database/Models/Prices');
const Periods = require('../Database/Models/Periods');
const { Op } = require('sequelize');
const Promotion = require('../Database/Models/Promotion');
const NoilPrice = require('../Database/Models/NoilPrice');

const getPeriodForDate = async (date) => {
  try {
    const result = await Periods.findAll({
      where: {
        start_date: { [Op.lte]: date },
        end_date: { [Op.gte]: date },
      },
      attributes: ['id'],
    });
    return result.map((period) => period.id);
  } catch (error) {
    console.error('Error in getPeriodForDate:', error);
    throw new Error('Unable to fetch periods for the given date');
  }
};

module.exports = {
  createHotel: (req, res) => {
    const { name, emailReception, emailReservation, images, category, phone, responsible, location } = req.body;
    Hotel.create({ name, emailReception, emailReservation, images, category, phone, responsible, location })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  },

  getHotelsByLocation: async (req, res) => {
    const { location, checkIn, checkout } = req.body;

    try {
      const periodForCheckIn = await getPeriodForDate(checkIn);
      const periodForCheckout = await getPeriodForDate(checkout);

      if (location !== '' && periodForCheckIn.length > 0 && periodForCheckout.length > 0) {
        const result = await Hotel.findAll({
          where: { location: location },
          include: [
            {
              model: Prices,
              where: {
                [Op.or]: [
                  { periodId: periodForCheckIn },
                  { periodId: periodForCheckout },
                ],
              },
            },
            {
              model:Periods,
              where: {
                id: { [Op.in]: [...periodForCheckIn, ...periodForCheckout] },
              },
            },
            {
              model: Promotion,
            },
            {
              model: NoilPrice,
            },
          ],
        });

        res.status(200).send(result);
      } else {
        res.status(400).send("Invalid location or no periods within the given dates");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getHotels: (req, res) => {
    Hotel.findAll()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
