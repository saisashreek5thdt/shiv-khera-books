"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Languages() {
  const router = useRouter();

  const langEnglishHandler = (e) => {
    e.preventDefault();
    router.push("/chapters/chapter1/winner");
  };

  const langSpanishHandler = (e) => {
    e.preventDefault();
    router.push("/lang/spanish/chapter1/winner");
  };

  const langFrenchHandler = (e) => {
    e.preventDefault();
    router.push("/lang/french/chapter1/winner");
  };

  const langGermanHandler = (e) => {
    e.preventDefault();
    router.push("/lang/germany/chapter1/winner");
  };

  return (
    <>
      <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 items-center justify-center">
        <h1
          className="p-2 w-36 text-lg font-medium uppercase bg-amber-500 text-white rounded-lg cursor-pointer"
          onClick={langEnglishHandler}
        >
          English
        </h1>
        <h1
          className="p-2 w-36 text-lg font-medium uppercase bg-amber-500 text-white rounded-lg cursor-pointer"
          onClick={langSpanishHandler}
        >
          español
        </h1>
        <h1
          className="p-2 w-36 text-lg font-medium uppercase bg-amber-500 text-white rounded-lg cursor-pointer"
          onClick={langFrenchHandler}
        >
          Français
        </h1>
        <h1
          className="p-2 w-36 text-lg font-medium uppercase bg-amber-500 text-white rounded-lg cursor-pointer"
          onClick={langGermanHandler}
        >
          Deutschland
        </h1>
      </div>
    </>
  );
}

export default Languages;
