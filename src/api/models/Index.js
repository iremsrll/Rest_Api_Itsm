const sequelize  = require('../../config/db');
const User       = require('./User'); 
const Department = require('./Department');
const Task       = require('./Task');
const Category   = require('./Category');
const Comment    = require('./Comment');

const db = {} ;

db.sequelize  = sequelize ;
db.User       = User ;
db.Department = Department ;
db.Task       = Task ;
db.Category   = Category ;
db.Comment    = Comment ;

db.Department.hasMany( db.User , {
    foreignKey : 'departmentId' ,
    sourceKey  : 'departmentId'
 }) ;

db.User.belongsTo(db.Department , {
    foreignKey : 'departmentId',  
    targetKey  : 'departmentId'
 }) ;

 db.User.hasMany( db.Task , {
    as: 'createdTasks',
    foreignKey : 'creatorId',
    sourceKey  : 'sicil' 
 }) ;

 db.Task.belongsTo( db.User , {
    as: 'creator',
    foreignKey : 'creatorId',
    targetKey  : 'sicil'
 }) ;

 db.User.hasMany( db.Task , {
    as: 'assignedTasks',
    foreignKey : 'assignTech',
    sourceKey  : 'sicil' 
 }) ;

 db.Task.belongsTo( db.User , {
    as: 'assignee',
    foreignKey : 'assignTech',
    targetKey  : 'sicil'
 }) ;

 db.Category.hasMany( db.Task, {
    foreignKey : 'categoryId',
    sourceKey  : 'categoryId'
 } ) 
 
 db.Task.belongsTo( db.Category , {
    foreignKey : 'categoryId' ,
    targetKey  : 'categoryId' 
 }) ;

 db.Comment.belongsTo( db.Task , {
    foreignKey : 'itsmNu', 
    targetKey  : 'itsmNu'
 }) ;

 db.Task.hasMany( db.Comment , {
    foreignKey : 'itsmNu', 
    sourceKey  : 'itsmNu'
 }) ;

 db.User.hasMany( db.Comment , {
    as: 'authorComments',
    foreignKey : 'authorID',
    sourceKey  : 'sicil'
 });

 db.Comment.belongsTo(db.User, {
    as: 'author',           
    foreignKey: 'authorID', 
    targetKey: 'sicil'      
});

 module.exports = db ;