'use client'
import { useState } from "react";

export default function Home() {
  
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <form className="flex flex-col">
        <input placeholder="user" className=""></input>
        <input placeholder="password"></input>
      </form>
    </div>
  );
}
