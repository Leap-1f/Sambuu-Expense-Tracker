import { FaCirclePlus, FaHouse } from "react-icons/fa6";
import {
  PiGiftFill,
  PiForkKnifeFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";
import { FaWineGlassAlt } from "react-icons/fa";
export const AddCategory = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[16.1%] *:px-4 *:py-4 rounded-t-xl drop-shadow-md">
        <div className="flex gap-3 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
          <div className=" text-2xl text-[#0166FF]">
            <FaCirclePlus />
          </div>
          <h1>Add Category</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#0166FF]">
            <FaHouse />
          </div>
          <h1>Home</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#FF4545]">
            <PiGiftFill />
          </div>
          <h1>Gift</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#FB8A22]">
            <PiForkKnifeFill />
          </div>
          <h1>Food</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#A804AB]">
            <FaWineGlassAlt />
          </div>
          <h1>Drink</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#EAB308]">
            <PiTaxiFill />
          </div>
          <h1>Taxi</h1>
        </div>
        <div className="flex gap-3">
          <div className=" text-2xl text-[#6F6CF3]">
            <PiTShirtFill />
          </div>
          <h1>Shopping</h1>
        </div>
      </div>
    </div>
  );
};
