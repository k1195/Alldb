const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route') 
var cors = require('cors')

app.use(express.json())
app.use(cors({credentials:false,origin:false}))

require('./utilities/elasticConn')
require('./utilities/mongoConn')
require('./utilities/sequelizeConn')

require('./models/mongo')


app.use('/property',route)

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV != 'test'){
app.listen(port , ()=>{
    console.log("app is running on ", port)
})
}
