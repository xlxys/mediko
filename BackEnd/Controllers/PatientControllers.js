import db from "../Models/Models.js";

const Patient = db.Patient;
const Doctor = db.Doctor;
const Consultation = db.Consultation;

export const GetPatient = async(req, res) => {

    try {
        const patient = await Patient.find({ });
        if (!patient) res.status(404).send(" no patient found");
        res.send(patient);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export const GetPatientByDoctor = async(req, res) => {
    try {
        const doctor = await Doctor.find({licenseNumber:req.body.licenseNumber});
        if (!doctor) res.status(404).send(" no doctor found");
        const patient = await Patient.find({IdCardNumber:doctor[0].patients});
        if (!patient) res.status(404).send(" no patient found");
        res.send(patient);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export const ConsultationHistory = async(req, res) => {
    try {
        const patient = await Patient.find({IdCardNumber:req.body.IdCardNumber});
        if (!patient) res.status(404).send(" no patient found");
        const consultation = await Consultation.find({patient:patient[0].IdCardNumber});
        if (!consultation) res.status(404).send(" no consultation found");
        res.send(consultation);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export const AddDrugsQuantity = async(req, res) => {
  console.log("TEST1");  
  try {
        const patient = await Patient.find({IdCardNumber:req.body.IdCardNumber});
        if (!patient) {
          return res.status(404).send({ message: "User Not found." });
        }
        console.log("TEST2");
        //const drug1 =patient[0].drugs;
        
        console.log(patient[0].drugs.length);
        for (let i = 0; i < patient[0].drugs.length; i++) {
          if (patient[0].drugs[i].name === req.body.drugname) {
            patient[0].drugs[i].quantity += req.body.quantity;
            break;
          }
        }
        console.log("TEST3");
        const updatedPatient = await patient[0].save();

        /*
        console.log(drug1);
        //const drug = await drug1.find({"name":req.body.drugname});
        const foundDrug = drug1.find(drug => drug.name === req.body.drugname);
        console.log("TEST4");
        console.log(foundDrug);
        foundDrug.quantity += req.body.quantity;
        const updateddrug = await foundDrug.save();*/
        res.send({ message: "Patient was updated successfully!" });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export const GetPatientById = async(req , res) => {
    try {
        const patient = await Patient.find({IdCardNumber:req.body.IdCardNumber});
        if (!patient) res.status(404).send(" no patient found");
        res.send(patient);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export const AddPatient = async(req,res)=>{
    const user = new Patient({
        IdCardNumber: req.body.IdCardNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        birthDate: req.body.birthDate,
        bloodType: req.body.bloodType,
        weight: req.body.weight,
        height: req.body.height,
        phone: req.body.phone,
        illnesses: req.body.illnesses,
        allergies: req.body.allergies,
        drugs: req.body.drugs,
        duration: req.body.duration 
    });
    user.save(user).then((data)=>{
        console.log("Success!!");
        res.status(200).send("Success Lessgoo!!");
    });
}

export function performActionAtMidnight(action) {
  setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      
      // Check if it's midnight (00:00)
      if (currentHour === 0 && currentMinutes === 0) {
          // Perform the specified action
          UncheckedTimes();
      }
  }, 60000); // Check every minute (adjust as needed)
}

// Example usage:
function UncheckedTimes() {
  console.log('It\'s midnight! Performing the action...');
  // Add your specific action code here
  PatientModel.find({}, (err, patients) => {
      if (err) {
          console.log(err);
      } else {
          patients.forEach(patient => {
              patient.drugs.forEach(drug => {
                  drug.times.forEach(time => {
                      time.checked = false;
                  });
              });
              patient.save();
          });
      }
  });
}


