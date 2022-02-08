const client = require('../utilities/elasticConn')

const mongoose = require('../utilities/mongoConn')
const propertySchema = require('../models/mongo')
const Property = mongoose.model('properties')


const propertyOwner = require('../models/sequelizePowner')
const searchCriteria = require('../models/sequelizeScriteria')


//const Asssociation = SearchCriteria.belongsTo(PropertyOwner, { as: 'pId' });


async function postPropertyElastic(body) {
    try {
        console.log(body)
        const result = await client.index({
            index: "property1",
            body: {
                propertyOwner: {
                    enUserRole: body.propertyOwner.enUserRole,
                    whatsApp: body.propertyOwner.whatsApp,
                    phone: body.propertyOwner.phone,
                    companyLogo: body.propertyOwner.companyLogo,
                    arUserRole: body.propertyOwner.arUserRole,
                    userAvatar: body.propertyOwner.userAvatar,
                    postedAs: body.propertyOwner.postedAs,
                    name: body.propertyOwner.name,
                    whatsAppNumberCountryCode: body.propertyOwner.whatsAppNumberCountryCode,
                    phoneNumberCountryCode: body.propertyOwner.phoneNumberCountryCode,
                    email: body.propertyOwner.email
                },
                external360Link: body.external360Link,
                isAuction: body.isAuction,
                isShowOnTop: body.isShowOnTop,
                searchCriteria: {
                    amenities: body.searchCriteria.amenities,
                    unitTypeId: body.searchCriteria.unitTypeId,
                    propertySubTypeId: body.searchCriteria.propertySubTypeId,
                    statusTypeId: body.searchCriteria.statusTypeId,
                    furnishingTypeId: body.searchCriteria.furnishingTypeId
                }
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }


}

async function postPropertySequelize(body) {
    try {
        const result = await searchCriteria
            .create({
                unitTypeId: body.searchCriteria.unitTypeId,
                propertySubTypeId: body.searchCriteria.propertySubTypeId,
                statusTypeId: body.searchCriteria.statusTypeId,
                furnishingTypeId: body.searchCriteria.furnishingTypeId,
                propertyowner: {
                    enUserRole: body.propertyOwner.enUserRole,
                    whatsApp: body.propertyOwner.whatsApp,
                    phone: body.propertyOwner.phone,
                    companyLogo: body.propertyOwner.companyLogo,
                    arUserRole: body.propertyOwner.arUserRole,
                    userAvatar: body.propertyOwner.userAvatar,
                    postedAs: body.propertyOwner.postedAs,
                    name: body.propertyOwner.name,
                    whatsAppNumberCountryCode: body.propertyOwner.whatsAppNumberCountryCode,
                    phoneNumberCountryCode: body.propertyOwner.phoneNumberCountryCode,
                    email: body.propertyOwner.email,
                }
            }, {
                include: [propertyOwner]

            })
            return result
    } catch (error) {
        console.log(error)
    }

}


async function postPropertyMongo(body) {
    const property = new Property({
        propertyOwner: {
            enUserRole: body.propertyOwner.enUserRole,
            whatsApp: body.propertyOwner.whatsApp,
            phone: body.propertyOwner.phone,
            companyLogo: body.propertyOwner.companyLogo,
            arUserRole: body.propertyOwner.arUserRole,
            userAvatar: body.propertyOwner.userAvatar,
            postedAs: body.propertyOwner.postedAs,
            name: body.propertyOwner.name,
            whatsAppNumberCountryCode: body.propertyOwner.whatsAppNumberCountryCode,
            phoneNumberCountryCode: body.propertyOwner.phoneNumberCountryCode,
            email: body.propertyOwner.email
        },
        external360Link: body.external360Link,
        isAuction: body.isAuction,
        isShowOnTop: body.isShowOnTop,
        searchCriteria: {
            amenities: body.searchCriteria.amenities,
            unitTypeId: body.searchCriteria.unitTypeId,
            propertySubTypeId: body.searchCriteria.propertySubTypeId,
            statusTypeId: body.searchCriteria.statusTypeId,
            furnishingTypeId: body.searchCriteria.furnishingTypeId
        }
    })
    try {
        console.log(property)
        const result = await property.save()
        return result
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    postPropertyElastic,
    postPropertyMongo,
    postPropertySequelize
}