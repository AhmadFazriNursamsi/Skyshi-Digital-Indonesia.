import Data from "../model/todo.js";
import db from "../config/database.js"

export const getData = async(req, res)=>{
    try{
        console.log(req.query);
        if(req.query.activity_group_id){

            const data = await Data.findAll({
                where: {
                activity_group_id: req.query.activity_group_id
            }
        });
        res.status(200).json({status: "Success", message: "Success",data})
    }
    else{
            const datas = await Data.findAll({})
            res.status(200).json({status: "Success", message: "Success",datas})

    }
    }catch (error){
        res.status(500).json({msg: error.message});
    }
};
export const getData2 = async(req, res)=>{
    try{
        const data = await Data.findAll({
            where: {
                activity_group_id: req.query.activity_group_id
            }
        });

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
        res.status(200).json({status: "Success", message: "Success",data})
    }catch (error){
        res.status(500).json({msg: error.message});
    }
};



export const createData = async(req, res)=>{
    
    try{ 
        const data = await Data.findOne({where: {activity_group_id : req.body.activity_group_id}}) ;

        if(!data) return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.body.activity_group_id} Not Found`, data: {}})

        const datas = await data.update({
            title: req.body.title,
            priority: req.body.priority,
            
        });
        res.status(200).json({status: "Success", message: "Success",data})
    }catch (error){
        console.log(error);
        res.status(500).json({status: "Bad Request", message: "title cannot be null",data : {}});
    }
};






export const updateData = async(req, res)=>{
    try{ 
        const data = await Data.findOne({where: {id : req.params.id}}) ;

        if(!data) return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`, data: {}})

        const datas = await data.update({
            title: req.body.title,
            priority: req.body.priority,
            
        });
        res.status(200).json({status: "Success", message: "Success",data})
    }catch (error){
        console.log(error);
        res.status(500).json({status: "Bad Request", message: "title cannot be null",data : {}});
    }
};
export const deleteData = async(req, res)=>{
    const data = await Data.findOne({
        where: {
            id:req.params.id
        }
    });
    if(!data) return res.status(200).json({status: "Not Found", message: `Activity with ID ${req.params.id} Not Found`, data: {}})
    try{
        await data.destroy({

        });
        res.status(200).json({status: "Success", message: "Success",data})
    }catch (error){
        res.status(500).json({status: "Bad Request", message: "title cannot be null",data : {}});
    }  
};