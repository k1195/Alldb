// const client = require('../utilities/elasticConn')


// const create = client.indices.putMapping({
//     index: 'property1',
//     type: 'mytype',
//     body: {
//         properties: {
              
//                     AenUserRole: {type: 'string'},
//                     whatsApp: {type: 'integer'},
//                     phone: {type: 'integer'},
//                     companyLogo: {type: 'string'},
//                     arUserRole: {type: 'string'},
//                     userAvatar: {type: 'string'},
//                     postedAs: {type: 'integer'},
//                     name: {type: 'string'},
//                     whatsAppNumberCountryCode: {type: 'string'},
//                     phoneNumberCountryCode: {type: 'string'},
//                     email: {type: 'string'},
//         }
//     }
// }, function (err, resp, status) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Index created');
//     }
// });


// // async function create() {
// //     try {
// //         await client.index({
// //             index: "property1",
// //             body: {
                // propertyOwner: {
                //     A: 'Customer',
                //     whatsApp: 9658745896,
                //     phone: 8001233227,
                //     companyLogo: 'users/507/profile/null',
                //     arUserRole: ' الزبون ',
                //     userAvatar: 'null',
                //     postedAs: 11,
                //     name: 'Arkan1',
                //     whatsAppNumberCountryCode: '+966',
                //     phoneNumberCountryCode: '+966',
                //     email: 'migration_user@yopmail.com'
                // },
                // external360Link: null,
                // isAuction: false,
                // isShowOnTop: false,
                // searchCriteria: {
                //     amenities: ['AC', 'pool', 'gym'],
                //     unitTypeId: 23,
                //     propertySubTypeId: 41,
                //     statusTypeId: 505,
                //     furnishingTypeId: null
// //                 }
// //             }
// //         })

// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// module.exports = create



