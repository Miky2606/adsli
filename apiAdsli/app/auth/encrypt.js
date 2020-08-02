const bcrypt = require("bcrypt");

const encrypt ={}

encrypt.encriptar = async (password)=>{
    const hash = await bcrypt.hash(password,10)
    return hash
}

encrypt.validar = async(password,bdPassword)=>{

   return await bcrypt.compare(password,bdPassword)



}

module.exports = encrypt