export const Currency = () => {
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
                <img src="/Money.svg" alt="" />
              </div>
            </div>
            <h1 className=" text-2xl font-semibold pb-6">
              Select base currency
            </h1>
            <div className="mb-4">
              <select className="select bg-[#F3F4F6] w-full max-w-xs">
                <option disabled selected>
                  MNT - Mongolian Tugrik
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
                <option> MNT - Mongolian Tugrik</option>
              </select>
            </div>
            <p className=" text-xs font-normal flex text-center">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
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
