'use client'
import Cart from "./components/Cart";
import Stock from "./components/Stock";
import {Header} from "./components/Header";
import { useState } from "react";

export default function Home() {

  const [showCart, setShowCart] = useState(false);
  
  return (
    <div className="flex flex-col">
      <Header showCart={showCart} setShowCart={setShowCart}/>
        {
          showCart &&
          <Cart/>
        }
        <Stock />
    </div>
  );
}