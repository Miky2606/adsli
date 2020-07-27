const express=require("express");
const rutas = express.Router()
const controlador = require("../controlador/controlador")

rutas.get("/api/:perfil/",controlador.getUser)

rutas.post("/api/createUser",controlador.createUser)

module.exports=rutas