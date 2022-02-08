const mongoose = require('mongoose')
const {MONGOURI} = require('../utilities/keys')



mongoose.connect(MONGOURI)


mongoose.connection.on('connected',()=>{
    console.log("connecte to db")
})
mongoose.connection.on('err',(err)=>{
    console.log("err connected to db",err)
})

module.exports = mongoose
