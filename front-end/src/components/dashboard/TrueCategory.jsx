import { FaHouse, FaHouseChimneyMedical } from "react-icons/fa6";
import { PiHouseLineFill } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";
import { GiOrangeSlice } from "react-icons/gi";
import {
  BsCarFrontFill,
  BsCapsule,
  BsCart4,
  BsCupHotFill,
  BsDribbble,
  BsFillAirplaneFill,
  BsPlaystation,
} from "react-icons/bs";
import { TbHandMiddleFinger } from "react-icons/tb";

import { useState } from "react";
export const TrueCategory = ({ closeCategory }) => {
  const [showAddIcon, setShowAddIcon] = useState(false);
  const open = () => {
    setShowAddIcon(!showAddIcon);
  };

  return (
    <div className=" absolute bg-[rgba(0,0,0,0.5)] w-full h-full mt-[-80px] flex justify-center items-center">
      <div className="bg-white w-[22%] rounded-xl">
        <div className="flex justify-between px-6 py-5 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
          <h1 className="text-xl font-semibold">Add Category</h1>
          <img onClick={closeCategory} src="/X.svg" alt="" />
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <div
              onClick={open}
              className="flex items-center gap-2 input input-bordered w-[24%] mb-8 justify-between"
            >
              <div className="text-2xl">
                <FaHouse />
              </div>
              <div className="text-xl">
                <AiOutlineCaretDown />
              </div>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {showAddIcon && (
            <div className=" absolute bg-white w-[14%] mt-[-32px] rounded-lg">
              <div className="p-6 shadow-2xl flex flex-wrap *:text-2xl gap-6 ">
                <FaHouseChimneyMedical />
                <PiHouseLineFill />
                <IoGameController />
                <GiOrangeSlice />
                <BsCarFrontFill />
                <BsCapsule />
                <BsCart4 />
                <BsCupHotFill />
                <BsDribbble />
                <BsFillAirplaneFill />
                <BsPlaystation />
                <TbHandMiddleFinger />
              </div>
              <div className="flex bg-white p-6 border-[1px] border-slate-200 border-x-white border-b-white rounded-b-lg justify-between">
                <div className="w-6 h-6 rounded-[50%] bg-[#0166FF]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#01B3FF]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#41CC00]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#F9D100]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#FF7B01]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#AE01FF]"></div>
                <div className="w-6 h-6 rounded-[50%] bg-[#FF0101]"></div>
              </div>
            </div>
          )}

          <button className=" hover:bg-green-700 bg-[#16A34A] btn-sm w-[100%] rounded-[20px]">
            <h1 className=" text-base text-white font-normal">Add Category</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
