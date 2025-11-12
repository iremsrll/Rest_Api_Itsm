const { DataTypes } = require('sequelize');     

const sequelize = require('../../config/db') ;


const User = sequelize.define('User' , {
     
    sicil : {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull  : false ,
        unique     : true ,
    } ,
    fullName : {
        type :DataTypes.STRING,
        allowNull: false
    },
    email : { 
        type : DataTypes.STRING ,
        allowNull  : false ,
        unique     : true ,
        validate   :  {
            isEmail: true 
            }
    } ,
    phone : { 
        type : DataTypes.STRING ,
        unique     : true ,
    } ,
    startDate : { 
        type : DataTypes.DATEONLY,
    } ,
    title : { 
        type : DataTypes.STRING 
    } 
 }
                             
);

module.exports = User ;
