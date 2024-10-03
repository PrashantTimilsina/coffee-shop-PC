import { useDispatch, useSelector } from "react-redux";
import { addCard, totalPrice } from "./cardSlice";

// import { useEffect, useState } from "react";
function CoffeeCard({ coffeeData, show }) {
  const dispatch = useDispatch();

  function handleAddtoCart(item) {
    dispatch(addCard(item));
    dispatch(totalPrice());
  }
  return (
    <div className="card">
      {coffeeData
        .filter((items) => {
          return show ? items.available === true : items;
        })
        .map((item) => (
          <ul key={item.id}>
            {item.popular && <h3 className="popular">Popular</h3>}
            <img src={item.image} alt="coffeeimage" />

            <h3 className="name">
              {item?.name} <span>{item?.price}</span>
            </h3>
            {item.rating === null ? (
              <h3 className="star">
                ✡<span>No rating</span>
              </h3>
            ) : (
              <h3 className="star">
                ⭐
                <span>
                  {item?.rating} ({item?.votes}votes)
                </span>
                {!item.available && <span className="sold">Sold Out</span>}
              </h3>
            )}
            {item.available && (
              <button
                className="addtoCart"
                onClick={() => handleAddtoCart(item)}
              >
                Add to Cart
              </button>
            )}
          </ul>
        ))}
    </div>
  );
}

export default CoffeeCard;
