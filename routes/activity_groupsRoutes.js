import Express from "express";  
import{
    getData,
    getDataById,
    updateData,
    deleteData,
    createData
} from "../controller/activity_groupsController.js";

const router = Express.Router();

router.get('/activity-groups', getData);
router.get('/activity-groups/:id', getDataById);
router.post('/activity-groups', createData);
router.patch('/activity-groups/:id', updateData);
router.delete('/activity-groups/:id', deleteData);

export default router;