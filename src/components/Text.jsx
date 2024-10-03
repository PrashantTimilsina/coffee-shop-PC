import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Text({ handleFilter, handleHide }) {
  const navigate = useNavigate();
  return (
    <div className="text">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        <br></br>
        different roast types and origins, expertly roasted in small<br></br>{" "}
        batches and shipped fresh weekly.
      </p>
      <div className="btn-container">
        <button onClick={handleHide}>All Products</button>
        <button onClick={handleFilter}>Available Now</button>
        <button className="icon" onClick={() => navigate("/main/cart")}>
          <IoCartOutline />
          Cart
        </button>
      </div>
    </div>
  );
}

export default Text;
