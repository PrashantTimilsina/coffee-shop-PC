import { useDispatch, useSelector } from "react-redux";
import { deleteCard, totalPrice } from "./cardSlice";

function CartCard() {
  const CartItems = useSelector((state) => state.card.card);
  const CartPrice = useSelector((state) => state.card.price);
  const dispatch = useDispatch();
  function handleRemoveFromCart(item) {
    dispatch(deleteCard(item));
    dispatch(totalPrice());
  }
  return (
    <>
      {/* <h1 className="cartheading">Cart</h1> */}
      {CartItems.length == 0 ? (
        <h1 className="cartheading">Add items to cart !!!!</h1>
      ) : (
        <div>
          <h1 className="cartheading">Cart</h1>
          <h2 className="length">Total item: {CartItems.length}</h2>
          <h2 className="length">
            Total price: <span>{CartPrice} $</span>
          </h2>
        </div>
      )}
      <div className="card">
        {CartItems.map((item) => (
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
            <button
              className="addtoCart"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </ul>
        ))}
      </div>
    </>
  );
}

export default CartCard;
