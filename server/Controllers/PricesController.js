const Prices=require('../Database/Models/Prices')
module.exports={
    createPrice:async(req,res)=>{
        try{
            const {type,price,periodId}=req.body
            const hotelId=req.params.hotelId
            if (!type|| !price|| !periodId|| !hotelId) {
                return res.status(400).send({ error: 'Missing required fields' });
              }
            const prices= Prices.create({type,price,periodId,hotelId})
            console.log('this is the result of the price ',prices)
            res.status(201).send(prices)
        }catch(err){
            res.status(500).send({ err });
        }
    }
}