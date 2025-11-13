const { DataTypes } = require('sequelize');     

const sequelize = require('../../config/db') ;


const Category = sequelize.define('Category' , {
   
    categoryId : {
       type : DataTypes.CHAR(6) ,
       allowNull : false ,
       unique : true ,
       primaryKey : true ,        
    } ,

    name : {
       type : DataTypes.STRING ,
       allowNull : false ,
    } ,
    description :{
        type : DataTypes.STRING ,
        allowNull : true ,
      }  

 });

 module.exports = Category ;