import { FaHouse } from "react-icons/fa6";
import { AiOutlineCaretDown } from "react-icons/ai";
export const TrueCategory = ({ closeCategory }) => {
  return (
    <div className=" absolute bg-[rgba(0,0,0,0.5)] w-full h-full mt-[-80px] flex justify-center items-center">
      <div className="bg-white w-[22%] rounded-xl">
        <div className="flex justify-between px-6 py-5 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
          <h1 className="text-xl font-semibold">Add Category</h1>
          <img onClick={closeCategory} src="/X.svg" alt="" />
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 input input-bordered w-[24%] mb-8 justify-between">
              <div className="text-3xl">
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
          <button className=" hover:bg-green-700 bg-[#16A34A] btn-sm w-[100%] rounded-[20px]">
            <h1 className=" text-base text-white font-normal">Add Category</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
