import mongoose from 'mongoose';

const Consultation = new mongoose.Schema({
    doctor: { type: Number , ref: 'Doctor'},
    patient: { type: Number, ref: 'Patient' },
    date: { type: Date },
    time: { type: String },
    reason: { type: String },
    diagnosis: { type: String },
    prescription: { type: String },
    // You can add more fields specific to doctors if needed
});

const ConsultationModel = mongoose.model("Consultation",Consultation);

export default ConsultationModel;