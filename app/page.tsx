"use client";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  const textToCopy = "sunbet360";

  return (
    <main className="w-full min-h-screen  flex items-center justify-center p-4 sm:p-6  ">
      <div className="bg-transparent w-full  sm:w-96  p-5 my-5  rounded-lg  border-2 border-yellow-600">
        <div className="flex flex-col gap-y-8 items-center justify-around">
          <h1 className="text-4xl font-bold text-center text-white">
            sunbet360
          </h1>
          <div className="w-36 h-36 rounded-full border-4 border-yellow-600 flex items-center justify-center ">
            <h1 className="font-extrabold text-3xl ">
              <span className="text-yellow-600">Mel</span>
              <span className="text-white">BET</span>
            </h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              href="https://refpakrtsb.top/L?tag=d_1849839m_53873c_&site=1849839&ad=53873"
              className="font-bold p-3 border-2 rounded-xl border-yellow-600 text-xl text-white transition-all ease-in duration-300 hover:text-yellow-500"
            >
              Download app
            </Link>
          </div>
          <div className="border-2 border-yellow-600 rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-6 relative">
            <h1 className="text-white font-semibold text-2xl">
              Promo Code copy
            </h1>
            <h2 className="text-amber-400 font-bold text-2xl">{textToCopy}</h2>
            <CopyToClipboardButton text={textToCopy} />
          </div>
          <div className="border-2 border-yellow-600 rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-8">
            <div>
              <h1 className="text-white font-semibold text-2xl text-center">
                Click Below button
              </h1>
            </div>

            <Link
              href="https://refpakrtsb.top/L?tag=d_1849839m_18639c_&site=1849839&ad=18639"
              className="font-bold p-3 border-2 rounded-xl border-yellow-600 text-xl text-white transition-all ease duration-300 hover:text-yellow-500 "
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
