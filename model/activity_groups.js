import Sequelize from "sequelize";
import db from "../config/database.js";

const DataTypes = Sequelize;

const activity_groups =  db.define('activity_groups', {  
    email:{
        type: DataTypes.STRING,
        unique:true,
        allowNull: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: true,
    }, deleted_at:{
        type: DataTypes.STRING,
        allowNull: true,
    }, 
},{
    freezeTableName: true
    });
    export default activity_groups; 