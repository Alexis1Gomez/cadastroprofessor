import React, { PropsWithChildren } from "react";
import { SideBar } from "./_components/sidebar";
import { Header } from "./_components/header";

 const CadastroPro = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex relative">
      <div className="w-[14%]  flex flex-grow text-white font-playfair">
        <SideBar />
      </div>

      <div className="w-[80%] flex flex-col relative ">
        <Header />
        <main className="w-full h-full  bg-[#065D89]">{children}</main>
      </div>
    </div>
  );
};

export default CadastroPro;