import { useNavigate } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import Header from "./Header";
import Text from "./Text";
import { useState, useEffect } from "react";

function Main() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await res.json();
      console.log(data);
      setCoffeeData(data);
    }
    fetchData();
  }, []);
  function handleFilter() {
    setShow(true);
  }
  function handleHide() {
    setShow(false);
  }

  return (
    <>
      <Header />
      <main>
        <div className="main">
          <Text
            coffeeData={coffeeData}
            handleFilter={handleFilter}
            handleHide={handleHide}
          />
          <div className="cards">
            <CoffeeCard coffeeData={coffeeData} show={show} />
          </div>
        </div>
        <button className="mainback" onClick={() => navigate("/")}>
          Back
        </button>
      </main>
    </>
  );
}

export default Main;
