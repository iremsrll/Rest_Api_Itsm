const { DataTypes } = require('sequelize');     

const sequelize = require('../../config/db') ;

const Department = sequelize.define('Department' , {

    departmentId : { 
        primaryKey : true ,
        type      : DataTypes.INTEGER(4),
        allowNull : false ,
        unique    : true   
    }, 
    departmentName : {
        type      : DataTypes.STRING ,
        allowNull : false 
     } ,
 }
                             
);

module.exports = Department ;