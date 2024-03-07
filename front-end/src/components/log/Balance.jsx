export const Balance = () => {
  return (
    <div>
      <div className=" h-[100vh] flex justify-center">
        <div className="w-[18%]  *:flex *:justify-center flex-col">
          <div className="*:flex flex-col *:justify-center">
            <div className="flex mb-12 mt-10 gap-3">
              <img src="/Vector.png" alt="" />
              <img src="/Geld.svg" alt="" />
            </div>
            <ul className="steps *:text-sm ">
              <li className="step step-info">Currency</li>
              <li className="step step-info">Balance</li>
              <li className="step step-info">Finish</li>
            </ul>
          </div>

          <div className="*:flex flex-col *:justify-center mt-[160px]">
            <div className="mb-4">
              <div className="w-11 h-11 bg-[#0166FF] rounded-[50%] flex justify-center items-center">
                <img src="/Coins.svg" alt="" />
              </div>
            </div>
            <h1 className=" text-2xl font-semibold pb-6">
              Set up your cash Balance
            </h1>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6] w-full">
                <input type="text" className="grow" placeholder="Cash" />
              </label>
            </div>
            <p className=" text-xs font-normal flex text-center">
              How much cash do you have in your wallet?
            </p>
            <button className="btn btn-info w-[100%] rounded-[20px] mt-8">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
