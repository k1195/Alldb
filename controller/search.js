const filter = require("../dbService/filter")
const create = require('../models/elastic')


async function getProperty(req, res) {

    const finalResult = {}

    try {
        const data = await filter.getPropertyElastic(req)
        finalResult.elastic = [...data]
    } catch (error) {
        finalResult.elasticErro = {...error}
    }

    try {
        const data = await filter.getPropertySequelize(req)
        finalResult.sequelize = [...data]
    } catch (error) {
        finalResult.sequelizeErro = {...error}

    }

    try {
        const data = await filter.getPropertyMongo(req)
        finalResult.mongo = [...data]
    } catch (error) {
        finalResult.mongoErro = {...error}
    }

    res.status(200).json(finalResult)
}

async function getMin(req, res) {

    let finalResult = {}

    try {
        const data = await filter.getMinElastic()
        finalResult.elastic = [...data]
    } catch (error) {
        finalResult.elasticErro = {...error}
    }

    try {
        const data = await filter.getMinSequelize()
        finalResult.sequelize = [...data]
    } catch (error) {
        finalResult.sequelizeErro = {...error}

    }

    try {
        const data = await filter.getMinMongo()
        finalResult.mongo = [...data]
    } catch (error) {
        finalResult.mongoErro = {...error}
    }

    res.status(200).json(finalResult)

}



module.exports = {getProperty,getMin}