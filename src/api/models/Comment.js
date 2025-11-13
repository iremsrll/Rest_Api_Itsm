const { DataTypes } = require('sequelize');

const sequelize = require('../../config/db');

const Comment = sequelize.define( Comment ,{

    commentId : {
        type : DataTypes.INTEGER ,
        allowNull : false,
        primaryKey : true,
        unique : true
    } ,
    content : {
        type : DataTypes.STRING ,
        allowNull : false ,
    }
})