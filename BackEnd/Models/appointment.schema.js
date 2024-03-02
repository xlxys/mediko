import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    IdCardNumber: { type: Number, ref: 'Patient', required: true },
    licenseNumber: { type: Number, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    // Other appointment details
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;