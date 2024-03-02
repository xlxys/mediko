import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import PatientModel from "./PatientSchema.js";
import DoctorModel from "./Doctor.schema.js";
import ConsultationModel from "./consultation.schema.js";
import AppointmentModel from "./appointment.schema.js";
const db = {};

db.mongoose = mongoose;

db.Patient = PatientModel;
db.Doctor = DoctorModel;
db.Consultation = ConsultationModel;
db.Appointment = AppointmentModel;

export default db;