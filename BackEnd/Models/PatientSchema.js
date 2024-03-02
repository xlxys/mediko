import mongoose from 'mongoose';


const PatientSchema = new mongoose.Schema({
    IdCardNumber: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    bloodType: { type: String },
    weight: { type: Number },
    height: { type: Number },
    phone: { type: Number },
    illnesses: [{ type: String }],
    allergies: [{
        allergenName: { type: String },
        description: { type: String },
    }],
    drugs: [{
        name: { type: String },
        dosesPerDay: { type: Number },
        quantity: { type: Number },
        times: [{ 
            times: {type: Number},
            checked: {type: Boolean, default: false},            
        }],
        Duration: { type: Number },
    }],
});

const PatientModel = mongoose.model("Patient",PatientSchema);







export default PatientModel;