const sequelizeConn = require('../utilities/sequelizeConn')
const { Sequelize, DataTypes } = require('sequelize');

const propertyOwner = sequelizeConn.define('propertyowner',{
    pId:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    enUserRole: {
        type: DataTypes.STRING,
        allowNull: false
    },
    whatsApp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    companyLogo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    arUserRole: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userAvatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postedAs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    whatsAppNumberCountryCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumberCountryCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
    );

    propertyOwner.sync()

    module.exports = propertyOwner