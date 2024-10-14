'use client'
import Cart from "./components/Cart";
import Stock from "./components/Stock"
import Image from "next/image";

export default function Home() {

  return (
    <div className="*:w-full">
      <Stock />
      <Cart />
    </div>
  );
}
