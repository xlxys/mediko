import "./login.css";
import logo from "../assets/color.svg";

function Login() {
  return (
    <div className="login">
      <div className="box">
        <img src={logo} alt="" className="logo" />
        <h2>Login into your account</h2>
        <input type="text" placeholder="  username" /> <br /> <br />
        <input type="text" placeholder="  password" /> <br /> <br />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
