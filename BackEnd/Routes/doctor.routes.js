import express from "express";

import { GetDoctor, AddDoctor, updateDrugs } from "../Controllers/doctor.contollers.js";

const router = express.Router();

router.get("/doctor", GetDoctor);
router.post("/addDoctor", AddDoctor);
router.put("/updateDrugs", updateDrugs);

export default router;