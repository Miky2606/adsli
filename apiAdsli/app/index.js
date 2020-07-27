const express=require("express");
const app = express();
const path = require("path")
const cors = require("cors")
const pool=require("./conexion")

//Rutas

const rutas = require(path.join(__dirname+"/rutas/rutas"))

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(rutas)


app.listen(port, (req,res)=>{
console.log("hola")
})