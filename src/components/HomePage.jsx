import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <img src="./bg-cafe.jpg" alt="homepageimage" />
      <p className="topic">
        Welcome to <span>Coffee Shop</span>
      </p>
      <div className="btn-container">
        <button onClick={() => navigate("login")}>Login</button>
        <button onClick={() => navigate("register")}>Register</button>
      </div>
    </div>
  );
}

export default HomePage;
