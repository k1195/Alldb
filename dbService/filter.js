const client = require('../utilities/elasticConn')

const mongoose = require('../utilities/mongoConn')
const propertySchema = require('../models/mongo')
const propertyOwner = require('../models/sequelizePowner')
const Property = mongoose.model('properties')
const { Op } = require("sequelize");
const sequelize = require('../utilities/sequelizeConn')

const searchCriteria = require('../models/sequelizeScriteria')
const {
    range
} = require('express/lib/request')
const res = require('express/lib/response')




async function getPropertyElastic(req) {
    // await client.indices.refresh({
    //     index: 'property1'
    // })
     
    let must1 = []
    if(req.body.propertyOwner?.userAvatar)
    {
        var query = {term:{ 'propertyOwner.userAvatar': req.body.propertyOwner.userAvatar}}
        must1.push(query)
    }
    if(req.body.propertyOwner ?.postedAs ?.low)
    {
        var query = {range:{ 'propertyOwner.postedAs': {"gte": req.body.propertyOwner.postedAs.low,
        "lt": req.body.propertyOwner.postedAs.high}}}
        must1.push(query)
    }
    if (req.body.propertyOwner?.name) {
        let nameRegex = ("*" + req.body.propertyOwner.name + "*").toLowerCase()
        var query = {wildcard:{ 'propertyOwner.name': nameRegex}}
        must1.push(query)
    }

    try {
                const { body } = await client.search({
                index: 'property1',
                body: {
                    query: {
                        bool: {
                            must: must1
                    }
                }

            }
        })
    return body.hits.hits
} catch (error) {
    return error
}


}

async function getPropertySequelize(req) {


    let whereObj = {}

    if (req.body.propertyOwner ?.userAvatar) {
        whereObj.userAvatar = req.body.propertyOwner.userAvatar
    }

    if (req.body.propertyOwner ?.postedAs ?.low) {
        whereObj.postedAs = {
            [Op.between]: [req.body.propertyOwner.postedAs.low,
                req.body.propertyOwner.postedAs.high
            ]
        }
    }
    if (req.body.propertyOwner?.name) {
        whereObj.name = {
            [Op.iLike]: '%' + req.body.propertyOwner.name + '%'
        }
    }

    try {
        console.log('sequelize')
        const result = await propertyOwner.findAll({
            where: whereObj,
            include: searchCriteria
        });
        return result
    } catch (error) {
        console.log(error)
    }

}

async function getPropertyMongo(req) {

    let whereObj = {}

    if (req.body.propertyOwner ?.userAvatar) {
        whereObj['propertyOwner.userAvatar'] = req.body.propertyOwner.userAvatar
    }
    if (req.body.propertyOwner ?.postedAs ?.low) {
        whereObj['propertyOwner.postedAs'] = {
            $gte: req.body.propertyOwner.postedAs.low,
            $lte: req.body.propertyOwner.postedAs.high
        }
    }
    if (req.body.propertyOwner?.name) {
        whereObj['propertyOwner.name'] = new RegExp(req.body.propertyOwner.name, "i")
    }

    try {
        const result = await Property.find(
            whereObj
        )

        return result
    } catch (error) {
        console.log(error)
    }
}

async function getMinMongo() {
    
try {
    const result = await Property.aggregate( [ { $group :
         { _id : "$propertyOwner.enUserRole" , minPostedAs: { $min: "propertyOwner.postedAs" } } } ] )
    return result
} catch (error) {
    console.log(error)
}


}

async function getMinSequelize() {
  try {
      const result = await propertyOwner.findAll({
        attributes: [[sequelize.fn('MIN', sequelize.col('postedAs')), 'minPostedAs'],'enUserRole'],
        group:['enUserRole']
      })
      return result
  } catch (error) {
      console.log(error)
  }
}

async function getMinElastic() {
    try {
                const { body } = await client.search({
                index: 'property1',
                size:0,
                body: {
                    aggs : {
                        propertyOwner : {
                            terms : { field : 'propertyOwner.enUserRole.keyword' },
                    aggs: {
                        min_PostedAs: {
                          min: {
                            field: "propertyOwner.postedAs"
                          }
                        }
                      }}
                    }
            }
        })
        
    return body.aggregations.propertyOwner.buckets
} catch (error) {
    console.log(error)
}
}


module.exports = {
    getPropertyElastic,
    getPropertyMongo,
    getPropertySequelize,
    getMinElastic,
    getMinMongo,
    getMinSequelize
}