import { useState } from "react";
import { AddRecord } from "./AddRecord";
import { TrueCategory } from ".";
export const Records = ({ category }) => {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const open = () => {
    setShowAddRecord(!showAddRecord);
  };
  const close = () => {
    setShowAddRecord(!showAddRecord);
  };

  const [showAddCategory, setShowAddCategory] = useState(false);
  const openCategory = () => {
    setShowAddCategory(!showAddCategory);
  };
  const closeCategory = () => {
    setShowAddCategory(!showAddCategory);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [selectedType, setSelectedType] = useState("default");
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="bg-[#F3F4F6] flex justify-center">
      {showAddRecord && <AddRecord close={close} open={open}></AddRecord>}
      {showAddCategory && (
        <TrueCategory closeCategory={closeCategory}></TrueCategory>
      )}
      <div className="w-[54%] flex justify-between">
        <div className="w-[23.3%] mt-6 px-4 py-6 bg-white rounded-xl">
          <div>
            <h1 className="text-2xl font-semibold mb-6">Records</h1>
            <button
              onClick={open}
              className="btn btn-info btn-sm w-[100%] rounded-[20px] mb-6"
            >
              <img src="/wplus.svg" alt="" />
              <h1 className="text-base text-white font-normal">Add</h1>
            </button>
          </div>
          <label className="input input-bordered flex items-center gap-2 h-8 mb-6">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="mb-6">
            <h1 className=" text-base font-semibold pb-4">Types</h1>
            <div>
              <div className="form-control">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="theme-controller  radio-sm"
                    value="default"
                    checked={selectedType === "default"}
                    onChange={handleTypeChange}
                  />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="theme-controller radio-sm"
                    value="retro"
                    checked={selectedType === "default"}
                    onChange={handleTypeChange}
                  />
                  <span className="label-text">Income</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="theme-controller  radio-sm"
                    value="cyberpunk"
                    checked={selectedType === "default"}
                    onChange={handleTypeChange}
                  />
                  <span className="label-text">Expense</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between">
              <h1 className="text-base font-semibold">Category</h1>
              <h1 className="text-base font-normal text-[#1F2937]">Clear</h1>
            </div>
            <div>
              {category.map((el) => {
                return (
                  <div>
                    <div className="flex justify-between cursor-pointer">
                      <div className="flex gap-2 p-3 ">
                        <img src="/eye.svg" alt="" />
                        <h1>{el.name}</h1>
                      </div>
                      <img src="/sum.svg" alt="" />
                    </div>
                  </div>
                );
              })}
              <div
                onClick={openCategory}
                className="flex gap-2 p-3 cursor-pointer"
              >
                <img src="/plus.svg" alt="" />
                <h1>Add Category</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold pb-4">Amount Range</h1>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range"
            /> */}
          </div>
        </div>
        <div className="w-[74%]">
          <div>
            <div className="flex justify-between mb-3 mt-8">
              <img className="pl-16" src="/days.svg" alt="" />
              <select className="select select-bordered w-[180px] max-w-xs">
                <option disabled selected>
                  Newest fisrt
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="flex justify-between bg-white px-6 py-3 rounded-xl">
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 "
                />
                <h1>Select all</h1>
              </div>
              <h1 className="font-semibold">- 35,500₮</h1>
            </div>
          </div>
          <div>
            <h1 className="py-3">Today</h1>
            <div className="flex justify-between bg-white px-6 py-3 items-center rounded-xl mb-3">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 "
                />
                <div className="w-10 h-10 bg-[#0166FF] rounded-[50%] flex justify-center items-center">
                  <img src="/House.svg" alt="" />
                </div>
                <div>
                  <h1>Lending & Renting</h1>
                  <p className="text-xs font-normal">14:00</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">-1000</h1>
              </div>
            </div>
            <div className="flex justify-between bg-white px-6 py-3 items-center rounded-xl">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 "
                />
                <div className="w-10 h-10 bg-[#FF4545] rounded-[50%] flex justify-center items-center">
                  <img src="/fork.svg" alt="" />
                </div>
                <div>
                  <h1>Food & Drinks</h1>
                  <p className="text-xs font-normal">14:00</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">-1000</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="py-3">Yesterday</h1>
            <div className="flex justify-between bg-white px-6 py-3 items-center rounded-xl mb-3">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 "
                />
                <div className="w-10 h-10 bg-[#FF4545] rounded-[50%] flex justify-center items-center">
                  <img src="/fork.svg" alt="" />
                </div>
                <div>
                  <h1>Food & Drinks</h1>
                  <p className="text-xs font-normal">14:00</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">-1000</h1>
              </div>
            </div>
            <div className="flex justify-between bg-white px-6 py-3 items-center rounded-xl">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 "
                />
                <div className="w-10 h-10 bg-[#FF4545] rounded-[50%] flex justify-center items-center">
                  <img src="/fork.svg" alt="" />
                </div>
                <div>
                  <h1>Food & Drinks</h1>
                  <p className="text-xs font-normal">14:00</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">-1000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
