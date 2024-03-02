import logo from "../assets/Frame.svg";
import radjel from "../assets/men.png";
import flicha from "../assets/flicha.svg";
import "./patientreg.css";

function PatientReg() {
  return (
    <div className="patientreg">
      <div className="left">
        <img src={logo} alt="" />
        <div className="prfl">
          <img src={radjel} alt="" id="profilepic" />
          <div className="txt">
            <h4 id="name">
              Dr.CHIKHI Sofiane <br />
              <span id="speci">senior surgeon</span>
            </h4>
          </div>
        </div>
        <hr id="line" />
        <ul>
          <li>Patients</li>
          <li>Calender</li>
          <li>Dashboard</li>
          <li>Messaging</li>
        </ul>
      </div>

      <div className="right">
        <h1>Patient account registrations</h1>
        <div className="container">
          <div className="gauche">
            <div className="info">
              <label>Name</label>
              <input type="text" className="infoinput" />
            </div>
            <div className="info">
              <label>Gender</label>
              <select name="" className="infoinput">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="infoD">
              <span>Date of birth</span>{" "}
              <input
                type="text"
                class="infoinputD"
                maxlength="2"
                placeholder="MM"
              />
              <input
                type="text"
                class="infoinputD"
                maxlength="4"
                placeholder="YYYY"
              />
              <input
                type="text"
                class="infoinputD"
                maxlength="2"
                placeholder="DD"
              />
            </div>
            <div className="info">
              <span>SSN</span> <input type="text" className="infoinput" />
            </div>
            <div className="info">
              <span>Blood type</span>
              <select name="" className="infoinput">
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="info">
              <span>disease</span> <input type="text" className="infoinput" />
            </div>
            <div className="info">
              <span>Allergies</span> <input type="text" className="infoinput" />
            </div>
          </div>
          <div className="droite">
            <div className="info">
              <span>Email</span> <input className="infoinput" type="email" />
            </div>
            <div className="info">
              <span>Phone</span> <input className="infoinput" type="text" />
            </div>
            <div className="info">
              <span>Password</span>{" "}
              <input className="infoinput" type="password" />
            </div>
            <div className="info">
              <span> Confirm password</span>{" "}
              <input className="infoinput" type="password" />
            </div>
            <div className="info">
              <input type="checkbox" id="check" className="infoinput" />{" "}
              <span>Do you accept our terms ?</span> <br />
            </div>
            <button id="savebutton">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg;
