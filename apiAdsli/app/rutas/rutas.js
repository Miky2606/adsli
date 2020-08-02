const express=require("express");
const findUser = require("../auth/findUser");
const {verify} = require("../auth/jwt");
const rutas = express.Router()
const controlador = require("../controlador/controlador")

rutas.get("/api/:perfil/",controlador.getUser)

rutas.post("/api/createUser",findUser.find,controlador.createUser)

rutas.post("/api/createAdslier",findUser.find,controlador.createAdslier)

rutas.post("/api/loginUser", controlador.login)

rutas.post("/api/loggedUser", controlador.logged)

rutas.get("/api/session/me",verify,controlador.session)


module.exports=rutas