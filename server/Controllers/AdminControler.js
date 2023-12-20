const Admin = require('../Database/Models/Admin.js');
const bcrypt = require('bcrypt');

const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log(error);
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
        res.status(500).send(err);
      });
  },
  login: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const result = await Admin.findAll({
        where: { username: username }
      });

      if (result.length > 0) {
        const isPasswordMatched = await comparePassword(
          password,
          result[0].password
        );
        if (isPasswordMatched) {
          res.send({ comparePass: "success" });
        } else {
          res.send({ comparePass: "Password not matched" });
        }
      } else {
        res.send({ comparePass: "User not found" });
      }
    } catch (err) {
      res.status(501).send({ Error: err.message });
    }
  }
};
