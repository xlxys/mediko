import db from "../Models/Models.js";

const Doctor = db.Doctor;
const Patient = db.Patient;


export const GetDoctor = async(req, res) => {

    try {
        const doctor = await Doctor.find({ });
        if (!doctor) res.status(404).send(" no doctor found");
        res.send(doctor);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
};

export const AddDoctor = async(req,res)=>{
    const user = new Doctor({
        licenseNumber: req.body.licenseNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        speciality: req.body.speciality,
        phone: req.body.phone,
        patients: req.body.patients
    });
    user.save(user).then((data)=>{
        console.log("Success!!");
        res.status(200).send("Success Lessgoo!!");
    });
};

export const updateDrugs = async (req, res) => {

    try {
        const patient = await Patient.find({IdCardNumber:req.body.IdCardNumber});
        if (!patient) {
          return res.status(404).send({ message: "User Not found." });
        }


        console.log(req.body.drugs);

        console.log(patient[0].drugs);
        patient[0].drugs.push(req.body.drugs);
        const updatedPatient = await patient[0].save();
        res.send({ message: "Patient was updated successfully!" });

      }
    catch (err) {
        res.status(500).send({ message: err.message });
      }
    };