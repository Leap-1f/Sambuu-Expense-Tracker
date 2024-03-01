export const Header = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex w-[54%] justify-between my-5">
        <div className="flex gap-6 w-[40%] items-center">
          <img className="w-[40px] h-[40px]" src="/Vector.png" alt="" />
          <h1>Dashboard</h1>
          <h1>Records</h1>
        </div>
        <div className="flex">
          <div className="bg-[#0166FF] flex items-center rounded-r-[30px] rounded-l-[30px] py-1 px-3">
            <img src="Leading icon.svg" alt="" />
            <p className="font-normal text-base text-white flex gap-1">
              Record
            </p>
          </div>
          <div className="ml-6">
            <img src="Placeholder.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
