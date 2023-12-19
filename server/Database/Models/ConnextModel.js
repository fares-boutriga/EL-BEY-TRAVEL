// Import Sequelize and sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance and connect to the database
const sequelize = new Sequelize('mydatabase', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define Sequelize models
const Hotel = sequelize.define('Hotel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailReception: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailReservation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  chefReservation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Promotion = sequelize.define('Promotion', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promotion: {
    type: DataTypes.DECIMAL(3, 0),
    allowNull: false,
  },
});

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Reservation = sequelize.define('Reservation', {
  reference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  client: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  teleClient: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hotel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateReservation: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  checkin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  checkout: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  nombreJours: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nombreChambres: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payer: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reste: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cotisationHotel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

const Chambre = sequelize.define('Chambre', {
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Period = sequelize.define('Period', {
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Price = sequelize.define('Price', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define associations between models
Hotel.hasMany(Promotion);
Promotion.belongsTo(Hotel);

Admin.hasMany(Reservation);
Reservation.belongsTo(Admin);

Promotion.hasMany(Chambre);
Chambre.belongsTo(Promotion);

Reservation.hasMany(Chambre);
Chambre.belongsTo(Reservation);

Hotel.hasMany(Period);
Period.belongsTo(Hotel);

Hotel.hasMany(Price);
Price.belongsTo(Hotel);
Period.hasMany(Price);
Price.belongsTo(Period);

// Sync the models with the database
(async () => {
  await sequelize.sync({ force: true });
  console.log('Models synced successfully.');
})();
