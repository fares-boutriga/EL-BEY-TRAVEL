const NoilPrice = require('../Database/Models/NoilPrice');

module.exports = {
  createNoil: (req, res) => {
    const {noil,saintSylvester} = req.body;
    const hotelId=req.params.hotelId
    NoilPrice.create({noil,saintSylvester,hotelId})
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send(err); // Fix the typo here
      });
  },
  getNoil:(req,res)=>{
    NoilPrice.findAll()
    .then(result=>{
      res.status(200).send(result)
    })
    .catch(err=>{
      res.status(500).send(err)
    })
  }
};
