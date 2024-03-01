export const Loading = () => {
  return (
    <div>
      <div className=" h-[100vh] flex justify-center items-center">
        <div>
          <div className="flex gap-3 items-center pb-12">
            <img className="w-[44px] h-[43px]" src="/Vector.png" alt="" />
            <img className="w-[89px] h-[31px]" src="/Geld.svg" alt="" />
          </div>
          <div className="flex justify-center pb-4">
            <span className="loading loading-spinner text-info flex justify-center"></span>
          </div>
          <p className=" text-base font-semibold text-[#0F172A] flex justify-center">
            Түр хүлээнэ үү...
          </p>
        </div>
      </div>
    </div>
  );
};
