const express = require('express')
const postProperty = require('../../controller/post')


test('post property' , async () =>{
    
    let req = express.request
    let res = express.response
    
    req.body = {
        "propertyOwner": {
           "enUserRole": "Customer",
           "whatsApp": 324234525,
           "phone": 8003227,
           "companyLogo": "users/507/profile/null",
           "arUserRole": " الزبون ",
           "userAvatar": "asd",
           "postedAs": 23,
           "name": "karanp907788",
           "whatsAppNumberCountryCode": "+966",
           "phoneNumberCountryCode": "+966",
           "email": "migration_user@yopmail.com"
        },
        "external360Link": null,
        "isAuction": false,
        "isShowOnTop": false,
        "searchCriteria": {
           "amenities": ["AC", "pool", "gym"],
           "unitTypeId": 23,
           "propertySubTypeId": 41,
           "statusTypeId": 505,
           "furnishingTypeId": "34"}
        }

        const data = await postProperty(req,res);

    expect(data).
    toMatchObject(
            {
                "unitTypeId": 23,
                "propertySubTypeId": 41,
                "statusTypeId": 505,
                "furnishingTypeId": "34",
                "propertyowner": {
                    "enUserRole": "Customer",
                    "whatsApp": 324234525,
                    "phone": 8003227,
                    "companyLogo": "users/507/profile/null",
                    "arUserRole": " الزبون ",
                    "userAvatar": "asd",
                    "postedAs": 23,
                    "name": "karanp907788",
                    "whatsAppNumberCountryCode": "+966",
                    "phoneNumberCountryCode": "+966",
                    "email": "migration_user@yopmail.com",
                 
                },
             
            }
        )
    
})

  