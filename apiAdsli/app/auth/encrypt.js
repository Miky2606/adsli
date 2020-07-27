const bcrypt = require("bcrypt");

const encrypt ={}

encrypt.encriptar = async (password)=>{
    const hash = await bcrypt.hash(password,10)
    return hash
}

module.exports = encrypt