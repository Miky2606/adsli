const controlador={};
const pool = require("../conexion");
const encrypt = require("../auth/encrypt");
const {create} = require("../auth/jwt");

const secretToken = require("../auth/secretToken");
const jwt = require("jsonwebtoken");
const { email } = require("../auth/secretToken");



controlador.getUser = async (req,res)=>{


  const users= await  pool.query("Select * From Users where user = ?", req.params.perfil)

  if(users.length > 0){

    res.send(users)


  }else{

    res.send(null)

  }



}

controlador.createUser = async (req,res)=>{

  if(req.searchUser.length > 0 ){

    res.send(null)

  }
  else{

    let datos = req.datos

    try {

      datos.password = await encrypt.encriptar(datos.password)

    const insertUser = await pool.query("Insert Into Users set ?", datos)


    const token = create(insertUse.insertId)

    res.json({ auth:true, token })




    } catch (error) {
      res.send(error)

    }






  }




  }

  controlador.createAdslier = async (req,res)=>{

      if(req.searchUser.length > 0 ){

        res.send(null)

      }
      else{




        try {

        const findAdslier = await pool.query("Select * from Adslier where instagram = ? ", req.body.instagram)


        if(findAdslier.length > 0){

          res.send("no")

        }else{


          const datos = req.datos
          console.log(req.datos)

          datos.password = await encrypt.encriptar(datos.password)

          const insertUser = await pool.query("Insert Into Users set ?", datos)


          const Adslier={
            id_user:insertUser.insertId,
            instagram:req.body.instagram,

          }


          const insertAdslier = await pool.query("Insert Into Adslier set ?", Adslier)


          const token = create(insertUser.insertId)

                 res.json({ auth:true, token })


        }





        } catch (error) {
         console.log(error)

        }






      }




  }


  controlador.logged = async(req,res)=>{


        try {

          const login = await pool.query("Select * from Users where email = ?", req.body.email)


          if(login.length > 0){

            const password = await encrypt.validar(req.body.password,login[0].password)

            if(password){


               const token = create(login[0].id)

               res.json({ auth:true, token })

            }else{

              res.send("password")

            }

          }else{

            res.send(null)

          }


        } catch (error) {

          console.log(error)

        }

      }


controlador.session = async (req,res)=>{


  const users= await  pool.query("Select * From Users where id = ?", req.id)

  let user={
   user:users.name,
   email:users.email
  }

  res.json(users)
}


controlador.login = async (req,res)=>{



  const users= await  pool.query("Select * From Users where email = ?", req.body.email)

  const token = create(users[0].id)

               res.json({ auth:true, token })



}

controlador.destroy = async (req,res)=>{
  

res.clearCookie("authorization")

  res.send("yes")
}





module.exports = controlador