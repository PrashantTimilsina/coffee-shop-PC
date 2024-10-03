import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(name);
    setPass(pass);
  }, [name, pass]);
  function handleLogin(e) {
    e.preventDefault();
    const storedId = localStorage.getItem("userId");
    const storedPass = localStorage.getItem("userPass");
    if (storedId !== name || storedPass !== pass)
      return alert("Please check the details properly");
    navigate("/main");
  }
  return (
    <div className="form">
      <form className="loginform">
        <h2>Login</h2>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button
          className="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          {" "}
          Back
        </button>
      </form>
    </div>
  );
}

export default Login;
