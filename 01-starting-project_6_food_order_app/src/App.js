import Header from "./components/Layout/Header";
import React, { Fragment, useContext } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import cartContext from "./store/cart-store";
function App() {
  const ctx = useContext(cartContext)
  
  return (
    <Fragment>
      {ctx.showCart && <Cart closeCart={ctx.closeCart}/>}
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
