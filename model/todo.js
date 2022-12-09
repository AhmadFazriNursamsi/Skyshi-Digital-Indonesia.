import Sequelize from "sequelize";
import db from "../config/database.js";

const DataTypes = Sequelize;

const Todo =  db.define('Todo', {  
    activity_group_id:{
        type: DataTypes.STRING,
        allowNull: true,
    },title:{
        type: DataTypes.STRING,
        allowNull: true,
    },is_active:{
        type: DataTypes.STRING,
        allowNull: true,
    },priority:{
        type: DataTypes.STRING,
        allowNull: true,
    }, deleted_at:{
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    freezeTableName: true
    });
    export default Todo; 