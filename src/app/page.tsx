'use client'

import Image from "next/image";
import FILTER_ICON from "../../public/filter30.png";
import SEARCH_ICON from "../../public/search30.png";
import Filter from "./components/filter_bar";
import { useState } from "react";

export default function Home() {
  const [openFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 main-background">
      <h1 className="dynapuff-font">AniRec</h1>
      <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
        <button type="submit" className="relative pt-2 pr-2 pb-2 bg-[#0d1829] rounded-full">
          <Image alt="search" src={SEARCH_ICON} className="image-size"></Image>
        </button>
        <input type="text" className="w-full bg-[#0d1829] flex bg-transparent text-[#cccccc] outline-0" placeholder="Enter an anime" />
        <button className="self-center flex cursor-pointer bg-[#0d1829]">
          <Image alt="filter" src={FILTER_ICON} className="image-size" onClick={() => setIsOpenFilter(!openFilter)}></Image>
        </button>
      </div>
      <Filter filter={openFilter} setFilter={setIsOpenFilter} />
    </div>
  );
}
