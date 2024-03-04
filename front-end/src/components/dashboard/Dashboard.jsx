export const Dashboard = () => {
  return (
    <div className="flex justify-center bg-[#F3F4F6] h-[100vh] ">
      <div className="w-[54%] flex mt-7 justify-between">
        <div className="bg-white w-[32%] h-fit rounded-xl">
          <div className="flex items-center gap-2 border-[1px] border-slate-200 border-x-white border-t-white px-6 py-4 rounded-t-xl">
            <div className="w-2 h-2 rounded-[50%] bg-[#84CC16] "></div>
            <h1 className="text-base font-semibold">Your Income</h1>
          </div>
          <div className="px-6 pt-5 pb-6">
            <h1 className=" text-4xl font-semibold">1,200,000₮</h1>
            <p className=" text-lg font-normal text-[#64748B] pb-4 pt-2">
              Your Income Amount
            </p>
            <div className="flex">
              <img src="up.svg" alt="" />
              <p className="text-lg font-normal">32%</p>
              <p className="text-lg font-normal">from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[32%] h-fit rounded-xl">
          <div className="flex items-center gap-2 border-[1px] border-slate-200 border-x-white border-t-white px-6 py-4 rounded-t-xl">
            <div className="w-2 h-2 rounded-[50%] bg-[#0166FF] "></div>
            <h1 className="text-base font-semibold">Your Income</h1>
          </div>
          <div className="px-6 pt-5 pb-6">
            <h1 className=" text-4xl font-semibold">-1,200,000₮</h1>
            <p className=" text-lg font-normal text-[#64748B] pb-4 pt-2">
              Total Expenses
            </p>
            <div className="flex">
              <img src="dosho.svg" alt="" />
              <p className="text-lg font-normal">32%</p>
              <p className="text-lg font-normal">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
