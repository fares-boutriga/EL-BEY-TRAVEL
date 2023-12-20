const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'your_host',
  username: 'your_username',
  password: 'your_password',
  database: 'elbaytravel',
});

// Define Sequelize models for each table

const Admin = sequelize.define('admin', {
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

const Admins = sequelize.define('admins', {
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

const Hotels = sequelize.define('hotels', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  emailReception: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  emailReservation: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  images: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Promotion = sequelize.define('promotion', {
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  promotion: {
    type: DataTypes.DECIMAL(3, 0),
    allowNull: false,
  },
});

const Reservation = sequelize.define('reservation', {
  referance: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  client: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  teleClient: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hotel: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  dateReservation: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  chekin: {
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

const Chambres = sequelize.define('chambres', {
  type: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

const Periods = sequelize.define('periods', {
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Prices = sequelize.define('prices', {
  type: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define Relationships between tables

Admin.hasMany(Reservation);
Reservation.belongsTo(Admin);

Hotels.hasMany(Periods);
Periods.belongsTo(Hotels);

Hotels.hasMany(Prices);
Prices.belongsTo(Hotels);

Promotion.belongsTo(Hotels);
Hotels.hasMany(Promotion);

Promotion.hasMany(Chambres);
Chambres.belongsTo(Promotion);

Reservation.hasMany(Chambres);
Chambres.belongsTo(Reservation);

Periods.hasMany(Prices);
Prices.belongsTo(Periods);

// Synchronize the Sequelize models with the database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((err) => {
    console.error('Error creating database and tables:', err);
  });
