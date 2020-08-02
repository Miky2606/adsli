const findUser ={}
const pool = require("../conexion");

findUser.find = async (req,res,next)=>{

    let datos={
        user:req.body.user,
        email:req.body.email,
        password:req.body.password,
        userType:req.body.userType,
        userVerified:req.body.userVerified,
        perfilPic:req.body.perfilPic


    }




     const searchUser = await pool.query("Select * From Users where email = '"+ datos.email + "'Or user = '" + datos.user + "'");
     req.searchUser = searchUser
     req.datos = datos

     next()
}

module.exports = findUser