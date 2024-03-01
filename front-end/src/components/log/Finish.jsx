export const Finish = () => {
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
                <img src="/Check.svg" alt="" />
              </div>
            </div>
            <h1 className=" text-2xl font-semibold pb-6">Good Job!</h1>
            <p className=" text-xs font-normal flex text-center">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
            <button className="btn btn-info w-[100%] rounded-[20px] mt-8">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
