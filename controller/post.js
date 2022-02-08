const create = require("../dbService/create")

async function postProperty(req,res){

    try {
       // const cr = await create()
        const data = await create.postPropertyElastic(req.body) 
       // res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }

    try {
        const data = await create.postPropertySequelize(req.body) 
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }

    try {
        const data = await create.postPropertyMongo(req.body) 
       // res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
     
}



module.exports = postProperty