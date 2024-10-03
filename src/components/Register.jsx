import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [signName, setSignName] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signConfirm, setSignConfirm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (signPass !== signConfirm) return alert("Password doesnot match");
    localStorage.setItem("userId", signName);
    localStorage.setItem("userPass", signPass);
    navigate("/login");
  }
  return (
    <div className="form">
      <form className="loginform">
        <h2>Register</h2>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={signName}
          onChange={(e) => setSignName(e.target.value)}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          value={signPass}
          onChange={(e) => setSignPass(e.target.value)}
        />
        <label htmlFor="confirm">Confirm your password</label>
        <input
          type="text"
          id="confirm"
          placeholder="Confirm your password"
          value={signConfirm}
          onChange={(e) => setSignConfirm(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign Up</button>
        <button
          className="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Register;
