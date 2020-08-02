const jwt = require("jsonwebtoken");
const secretToken = require("../auth/secretToken");



const verify = (req,res,next) =>{



   const token =req.headers["authorization"]




    if(!token){
      res.json({

        auth:false,
         message: 'no'

       })
     }

     const decode = jwt.verify(token, secretToken.secret);



    req.id = decode.id

    next()

}

const create = (id) =>{



  let us = {
    id : id
  }



 const token = jwt.sign(us, secretToken.secret, {
    expiresIn: 60 * 60 * 24

  })



return token
}

module.exports = {
  verify,
  create

};