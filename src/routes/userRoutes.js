import express from "express";
import { addUserType, userType, addAction, action } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/type',userType);
router.post('/add-type',addUserType);

router.get('/action',action);
router.post('/add-action',addAction);

export default router;