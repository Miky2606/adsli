const controlador={};
const pool = require("../conexion");
const encrypt = require("../auth/encrypt");
const secretToken = require("../auth/secretToken");
const jwt = require("jsonwebtoken")



controlador.getUser = async (req,res)=>{


  const users= await  pool.query("Select * From Users where user = ?", req.params.perfil)

  if(users.length > 0){

    res.send(users)


  }else{

    res.send(null)

  }



}

controlador.createUser = async (req,res)=>{

    let datos={
        user:req.body.user,
        email:req.body.email,
        password:req.body.password,
        userType:req.body.userType,
        userVerified:req.body.userVerified


    }



    const searchUser = await pool.query("Select * From Users where email = '"+ datos.email + "'Or user = '" + datos.user + "'");

    if(searchUser.length > 0){

        res.send("hola")

    }else{

        datos.password = await encrypt.encriptar(datos.password)

        const insertUser = await pool.query("Insert Into Users set ?", datos)

        let us = {
            id : insertUser.insertId
          }

         const token = jwt.sign(us, secretToken.secret, {
            expiresIn: 60 * 60 * 24

          })


       res.json({auth:true,token, insertUser})


    }






    }



module.exports = controlador