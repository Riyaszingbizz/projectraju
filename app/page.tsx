/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useState } from "react";

export default function page() {
  const [count, setCount] = useState(1);
  const [heart, setHeart] = useState("");
  const [raju, setRaju] = useState("");
  const handle = () => {
    const riyas = (Math.random() * 100);
    setCount(Math.round(riyas));
    if (riyas <= 30) {
      setHeart("💖");
      setRaju("");
    }
    else if (riyas <= 50) {
      setHeart("💖💖");
      setRaju("");
    }
     else if (riyas <=70) {
      setHeart("💖💖💖");
      setRaju("");
    }
    else if (riyas <=99) {
      setHeart("💖💖💖💖");
      setRaju("");
    }
    else if (riyas < 101) {
      setHeart("😱😱😱😱😱");
      setRaju("/raju.mp4");

    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <div className="">Click to know your luck in relationship</div>
      <button onClick={handle} className="bg-black/100 text-[#ededed] p-2 rounded transform hover:bg-black/50 transition-transform duration-300">Click Me</button>
      <div className="text-2xl font-bold text-center justify-items-center">
        Your percentage is {count}% {heart}!
        <video src={raju} width={200} height={200} autoPlay loop>get 100 percent to see celebration</video>
      </div>
      <div className="w-full text-end">* Get 100% to see exclusive celebration</div>
    </div>
  );
}
