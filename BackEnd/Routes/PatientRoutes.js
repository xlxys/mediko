import express from "express";

import { GetPatient,AddPatient,AddDrugsQuantity} from "../Controllers/PatientControllers.js";

const router = express.Router();

router.get("/patient", GetPatient);
router.post("/addpatient", AddPatient);
router.post("/test", AddDrugsQuantity);

export default router;
