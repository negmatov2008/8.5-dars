import React from "react";
import Header from "./components/Header";
import Hero from "./components/hero";

function page() {
  return (
    <>
      <div className="max-w-[375px] mx-auto text-[#F0F0F0] md:max-w-[1170px]">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default page;
