import "./App.css";
import { useSelector } from "react-redux";
import Cart from "./Components/Cart/Cart";
import MainHeader from "./Components/Layout/MainHeader";
import Products from "./Components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.isCartOpen);
  console.log(showCart);
  return (
    <div>
      <MainHeader></MainHeader>
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
