import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaCirclePlus, FaHouse } from "react-icons/fa6";
import {
  PiGiftFill,
  PiForkKnifeFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";
import { FaWineGlassAlt } from "react-icons/fa";

export const AddRecord = ({ close }) => {
  const [showIncome, setShowIncome] = useState(false);
  const expense = () => {
    setShowIncome(false);
  };
  const income = () => {
    setShowIncome(true);
  };
  return (
    <div className=" absolute bg-[rgba(0,0,0,0.5)] w-full h-full mt-[-80px] flex justify-center items-center">
      {showIncome && (
        <div className="bg-white w-[35.4%]  rounded-xl">
          <div className="flex justify-between px-6 py-5 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
            <h1 className="text-xl font-semibold">Add Record</h1>
            <img onClick={close} src="/X.svg" alt="" />
          </div>
          <div className="flex">
            <div className="w-[50%] px-6 pb-6 pt-5">
              <div className="rounded-[20px] bg-[#F3F4F6] mb-5 flex">
                <div
                  onClick={expense}
                  className="w-full flex justify-center items-center cursor-pointer"
                >
                  <h1 className="text-black ">Expense</h1>
                </div>
                <button className="btn hover:bg-green-700  bg-[#16A34A] btn-sm rounded-[20px] h-[40px] text-white w-[50%]">
                  Income
                </button>
              </div>
              <div className="input input-bordered w-full mb-4 h-[76px] py-3">
                <h1>Amount</h1>
                <input type="text" placeholder="₮ 000.00" />
              </div>
              <div className=" mb-4">
                <h1 className="pb-2">Category</h1>
                {/* ========================= */}
                <button
                  className="btn w-full flex justify-between"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Find or choose category
                  <AiOutlineCaretDown />
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">aaaa aaaaa aaa</div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                {/* =========================== */}
              </div>
              <div className="flex mb-8">
                <div className="mr-3 w-[50%]">
                  <h1 className="pb-2">Date</h1>
                  <input
                    className="w-full rounded-lg border-[1px] border-black h-12 p-4"
                    type="date"
                  />
                </div>
                <div className="w-[50%]">
                  <h1 className="pb-2">Time</h1>
                  <input
                    className="w-full rounded-lg border-[1px] border-black h-12 p-4"
                    type="time"
                  />
                </div>
              </div>
              <button className=" hover:bg-green-700 bg-[#16A34A] btn-sm w-[100%] rounded-[20px]">
                <h1 className=" text-base text-white font-normal">
                  Add Record
                </h1>
              </button>
            </div>
            <div className="w-[50%] px-6 pb-6 pt-5">
              <div className="mb-5">
                <h1 className="mb-2">Payee</h1>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Write here
                  </option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div>
                <h1 className="mb-2">Note</h1>
                <input
                  type="text"
                  placeholder="Write here"
                  className="input input-bordered w-full h-[260px] pb-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!showIncome && (
        <div className="bg-white w-[35.4%]  rounded-xl">
          <div className="flex justify-between px-6 py-5 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
            <h1 className="text-xl font-semibold">Add Record</h1>
            <img onClick={close} src="/X.svg" alt="" />
          </div>
          <div className="flex">
            <div className="w-[50%] px-6 pb-6 pt-5">
              <div className="rounded-[20px] bg-[#F3F4F6] mb-5 flex">
                <button className="btn hover:bg-blue-700 btn-sm rounded-[20px] h-[40px] bg-[#0166FF] text-white w-[50%]">
                  Expense
                </button>
                <div
                  onClick={income}
                  className="w-full flex justify-center items-center cursor-pointer"
                >
                  <h1 className="text-black ">Income</h1>
                </div>
              </div>
              <div className="input input-bordered w-full mb-4 h-[76px] py-3">
                <h1>Amount</h1>
                <input type="text" placeholder="₮ 000.00" />
              </div>
              <div className=" mb-4">
                <h1 className="pb-2">Category</h1>
                {/* ========================= */}
                <button
                  className="btn w-full flex justify-between"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Choose
                  <AiOutlineCaretDown />
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <div className="  *:cursor-pointer">
                      <div className="flex gap-3 pb-6 border-[1px] border-slate-200 border-x-white border-t-white rounded-t-xl">
                        <div className=" text-2xl text-[#0166FF]">
                          <FaCirclePlus />
                        </div>
                        <h1>Add Category</h1>
                      </div>
                      <div className="flex gap-3 my-6">
                        <div className=" text-2xl text-[#0166FF]">
                          <FaHouse />
                        </div>
                        <h1>Home</h1>
                      </div>
                      <div className="flex gap-3 my-6">
                        <div className=" text-2xl text-[#FF4545]">
                          <PiGiftFill />
                        </div>
                        <h1>Gift</h1>
                      </div>
                      <div className="flex gap-3 my-6">
                        <div className=" text-2xl text-[#FB8A22]">
                          <PiForkKnifeFill />
                        </div>
                        <h1>Food</h1>
                      </div>
                      <div className="flex gap-3 my-6">
                        <div className=" text-2xl text-[#A804AB]">
                          <FaWineGlassAlt />
                        </div>
                        <h1>Drink</h1>
                      </div>
                      <div className="flex gap-3 my-6">
                        <div className=" text-2xl text-[#EAB308]">
                          <PiTaxiFill />
                        </div>
                        <h1>Taxi</h1>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <div className=" text-2xl text-[#6F6CF3]">
                          <PiTShirtFill />
                        </div>
                        <h1>Shopping</h1>
                      </div>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                {/* =========================== */}
              </div>
              <div className="flex mb-8">
                <div className="mr-3 w-[50%]">
                  <h1 className="pb-2">Date</h1>
                  <input
                    className="w-full rounded-lg border-[1px] border-black h-12 p-4"
                    type="date"
                  />
                </div>
                <div className="w-[50%]">
                  <h1 className="pb-2">Time</h1>
                  <input
                    className="w-full rounded-lg border-[1px] border-black h-12 p-4"
                    type="time"
                  />
                </div>
              </div>
              <button className="btn btn-info btn-sm w-[100%] rounded-[20px]">
                <h1 className="text-base text-white font-normal">Add Record</h1>
              </button>
            </div>
            <div className="w-[50%] px-6 pb-6 pt-5">
              <div className="mb-5">
                <h1 className="mb-2">Payee</h1>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Write here
                  </option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div>
                <h1 className="mb-2">Note</h1>
                <input
                  type="text"
                  placeholder="Write here"
                  className="input input-bordered w-full h-[260px] pb-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
