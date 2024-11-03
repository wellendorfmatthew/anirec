import Image from "next/image";
import Filter from "./public/filter30.png";
import Search from "./public/search30.png";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 main-background">
      <h1 className="dynapuff-font">AniRec</h1>
      <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
        <button type="submit" className="relative pt-2 pr-2 pb-2 bg-[#0d1829] rounded-full">
          <Image alt="search" src={Search} className="image-size"></Image>
        </button>
        <input type="text" className="w-full bg-[#0d1829] flex bg-transparent text-[#cccccc] outline-0" placeholder="Enter an anime" />
        <button className="self-center flex cursor-pointer bg-[#0d1829]">
          <Image alt="filter" src={Filter} className="image-size"></Image>
        </button>
      </div>
    </div>
  );
}
