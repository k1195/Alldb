const sequelizeConn = require('../utilities/sequelizeConn')
const {
    Sequelize,
    DataTypes
} = require('sequelize');

const propertyOwner = require('../models/sequelizePowner')

const searchCriteria = sequelizeConn.define('searchcriteria', {
    sId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    furnishingTypeId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unitTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertySubTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statusTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});



searchCriteria.belongsTo(propertyOwner,{
    foreignKey : {
        field:'pId'
    }
})
propertyOwner.hasOne(searchCriteria)

searchCriteria.sync()
module.exports = searchCriteria 