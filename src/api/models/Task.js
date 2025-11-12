const { DataTypes } = require('sequelize');     

const sequelize = require('../../config/db') ;

const Task = sequelize.define({
   
    itsmNu : {
       type  : DataTypes.CHAR(7),
       primaryKey : true ,
       allowNull  : false ,
       unique     : true ,       
    } ,
    title : {     
        type : DataTypes.CHAR(50),
        allowNull : false 
    },
    description : {
        type  : DataTypes.STRING,
        allowNull  : false ,
        unique     : true ,       
    } ,
    status: {
        type: DataTypes.ENUM('open', 'in_progress', 'closed', 'resolved'),
        defaultValue: 'open', 
        allowNull: false
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high', 'critical'),
        defaultValue: 'medium',
        allowNull: false
    },
    
});