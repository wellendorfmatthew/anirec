import Image from "next/image";
import EXIT_ICON from "../../../public/close30.png";
import { Dispatch, SetStateAction } from "react";

export default function Filter({ filter, setFilter }: { filter: boolean, setFilter: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className={`${
            filter ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } right-0 h-screen w-1/5 bg-[#0d1829] rounded-l-3xl fixed top-0 transition-all duration-500 ease-in-out`}>
            <div className="flex justify-between items-center pt-4 px-4">
                <p className="text-[#E2D2DC] montserrat-font filter-title">Filters</p>
                <Image src={EXIT_ICON} alt="Exit" className="image-size" onClick={() => setFilter(false)} />
            </div>
            <hr className="mt-2" />
            <p className="text-[#E2D2DC] montserrat-font filter-title pt-8 px-4">Format</p>
            <div className="flex flex-col justify-center items-center">
                <hr className="mt-2 w-[88%]" />
                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">tv</p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] w-20 py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">movie</p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] w-20 py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">ova</p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] w-20 py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">ona</p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] w-20 py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">special</p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-[#0d1829] border-[#E2D2DC] w-20 py-1 px-2 border-2">
                        <p className="montserrat-font format-title text-[#E2D2DC]">tv short</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
