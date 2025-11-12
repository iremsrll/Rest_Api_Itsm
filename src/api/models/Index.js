const sequelize  = require('../../config/db');
const User       = require('./User'); 
const Department = require('./Department');
const Task       = require('./Task');

const db = {} ;

db.sequelize  = sequelize ;
db.User       = User ;
db.Department = Department ;
db.Task       = Task ;

db.Department.hasMany( db.User , {
    foreignKey : 'department'
 }
) ;

db.User.belongsTo(db.Department , {
    foreignKey : 'department'
 }) ;


 db.User.hasMany( db.Task , {
    foreignKey : 'creator_id'
 } );

 db.Task.belongsTo( db.User , {
    foreignKey : 'assign_technician'
 } 

 );
 module.exports = db ;