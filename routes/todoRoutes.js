import Express from "express";  
import{
    getData,
    getData2,
    getDataById,
    updateData,
    deleteData,
    createData
} from "../controller/todoController.js";

const router = Express.Router();

router.get('/todo-items', getData);
// router.get('/todo-itemss', getData2);
// router.get('/todo-items', function(req, res){
//     res.send('id: ' + req.query.id);
//   });
  
router.get('/todo-items/:id', getDataById);
router.post('/todo-items', createData);
router.patch('/todo-items/:id', updateData);
router.delete('/todo-items/:id', deleteData);

export default router;