import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    licenseNumber: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    speciality: { type: String },
    phone: { type: Number },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
    // You can add more fields specific to doctors if needed
});

const DoctorModel = mongoose.model("Doctor",DoctorSchema);

export default DoctorModel;