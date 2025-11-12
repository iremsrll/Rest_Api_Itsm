const sequelize  = require('../../config/db');
const User       = require('./User'); 
const Department = require('./Department');

const db = {} ;

db.sequelize  = sequelize ;
db.User       = User ;
db.Department = Department ;

db.Department.hasMany( db.User , {
    foreignKey : 'department'
 }
) ;

db.User.belongsTo(db.Department , {
    foreignKey : 'department'
 }) ;

 module.exports = db ;