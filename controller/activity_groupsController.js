import Data from "../model/activity_groups.js";
import Datas from "../model/todo.js"
import db from "../config/database.js"
import mysql from "mysql2"
import { where } from "sequelize";

export const getData = async(req, res)=>{
    try{
        const data = await Data.findAll({
        }) ;

    res.status(200).json({status: "Success", message: "Success",data})
}catch (error){
        res.status(500).json({msg: error.message});
    }
};




export const getDataById = async(req, res)=>{
    try{
        const data = await Data.findOne({
            where: {
                id: req.params.id}
        });
        if(!data) return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`, data: {}})
        res.status(200).json({status: "Success", message: "Success",data})
    }catch (error){
        res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`})
        res.status(500).json({msg: error.message});
    }
};





export const createData = async(req, res)=>{
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    let datehere = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    
    try{ 

        const datas = await Data.create({
            title: req.body.title,
            email: req.body.email,
            
        });
        
        const data = await Datas.create({
            activity_group_id: datas.id,

        });

    const created_at = datas.createdAt ;
    const updated_at = datas.updatedAt ;
    const id = datas.id ;
    const title = datas.title ;
    const email = datas.email ;

        res.status(200).json({status: "Success", message: "Success", "data" :{ created_at, updated_at, id, title, email}});
    }catch (error){
        console.log(error);
        res.status(500).json({status: "Bad Request", message: "title cannot be null",data : {}});
    }
};






export const updateData = async(req, res)=>{
    try{ 
        const {title, email} = req.body;
        const data = await Data.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!data) {return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`, data: {}})}

        else if (req.body == null || req.body == ""){
            return res.status(200).json({status: "Bad Request", message: "title cannot be null", });
         }
    else if (req.body != null){ 
        const datas =  Data.update({
            title: title,
            email: email,
        }, {where :{id: data.id}});
        res.status(200).json({status: "Success", message: "Success", "data": {title, email}});
}

    }catch (error){
        res.status(500).json({status: "Bad Request", message: "title cannot be null", });
        res.status(500).json({msg: error.message});
    }
};
export const deleteData = async(req, res)=>{
    const datas = await Data.findOne({
        where: {
            id:req.params.id
        }
    });
    if(!datas) {return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`, data: {}})}

   try{
        await Data.destroy({
            where: {
                id: datas.id
            }

        });
        res.status(200).json({status: "Success", message: "Success", "data": {}});
    }catch (error){
        res.status(400).json({msg: error.message});
    }  
};