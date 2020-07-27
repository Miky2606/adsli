const db =  require("./db");
const mysql = require("mysql");
const {promisify} = require("util");
const { release } = require("os");

const pool= mysql.createPool(db);

pool.getConnection((err,conection)=>{
    if(err){
        console.log(err)
    }else{

        conection.release()
        console.log("conected")
    }

})

pool.query = promisify(pool.query)

module.exports = pool