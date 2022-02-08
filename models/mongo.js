const mongoose = require('../utilities/mongoConn')
//const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
   propertyOwner: {
            enUserRole: String,
            whatsApp: Number,
            phone: Number,
            companyLogo: String,
            arUserRole: String,
            userAvatar: String,
            postedAs: Number,
            name: String,
            whatsAppNumberCountryCode: String,
            phoneNumberCountryCode: String,
            email: String
        },
        external360Link: String,
        isAuction: Boolean,
        isShowOnTop: Boolean,
        searchCriteria: {
            amenities: [String],
            unitTypeId: Number,
            propertySubTypeId: Number   ,
            statusTypeId: Number,
            furnishingTypeId: String
        }
})


mongoose.model('properties',propertySchema)
module.exports = propertySchema