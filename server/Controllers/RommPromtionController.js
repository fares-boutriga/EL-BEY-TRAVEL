const RoomPromtonts = require('../Database/Models/RoomPromtonts');

module.exports = {
  createRommPromtion: (req, res) => {
    try{
         const {baby,towKisTowAdult,towKisOneAdult,maxThreeKids,theardBad} = req.body;
    const hotelId=req.params.hotelId
    RoomPromtonts.create({baby,towKisTowAdult,towKisOneAdult,maxThreeKids,theardBad,hotelId})
      .then(result => {
        res.status(200).send(result);
      })
    }catch(err) {
        res.status(400).send(err); 
      };
  },
  getRommPromtion:(req,res)=>{
    try{
        const {hotelId}=req.params
    RoomPromtonts.findAll({where:{hotelId}})
    .then(result=>{
      res.status(200).send(result)
    })
    } catch(err){
      res.status(500).send(err)
    }
  }
};
