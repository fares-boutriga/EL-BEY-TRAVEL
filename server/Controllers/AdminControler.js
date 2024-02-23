const Admin = require('../Database/Models/Admin.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sign } = require('jsonwebtoken');

require('dotenv').config();

const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  createUser: (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const { username, passwordIn } = req.body;
    const hash = bcrypt.hashSync(passwordIn, salt);
    const password = hash;

    Admin.create({ username, password })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
      });
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const result = await Admin.findOne({
        where: { username: username }
      });

      if (result) {
        const isPasswordMatched = await comparePassword(password, result.password);

        if (isPasswordMatched) {
          // Generate a JWT token
          const token = sign({ userId: result.id, username: result.username }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Set the token expiration time as needed
          });

          res.json({ success: true, message: 'Login successful', token });
        } else {
          res.status(401).send({ success: false, message: 'Incorrect password' });
        }
      } else {
        res.status(404).send({ success: false, message: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ success: false, error: 'Internal Server Error' });
    }
  }
};
