import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import { Provider } from "react-redux";
import store from "./store";
import CartCard from "./components/CartCard";

function App() {
  return (
    <div>
      <div className="header">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/main" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/main/cart" element={<CartCard />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
