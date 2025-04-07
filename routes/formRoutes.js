import express from "express";
import { getForm } from "../controller/formcontroller.js";
import { getFormById , createForm} from "../controller/formcontroller.js";

const router=express.Router();

router.get('/forms',getForm);
router.get('/forms/:id',getFormById);
router.post('/forms',createForm);

export default router;