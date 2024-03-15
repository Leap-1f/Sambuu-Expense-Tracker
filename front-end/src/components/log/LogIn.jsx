import Link from "next/link";
export const LogIn = () => {
  return (
    <div className="flex">
      <div className=" h-[100vh] w-[55%] flex justify-center items-center">
        <div className="w-[40%] *:pb-10 ml-[100px]">
          <div className="flex justify-center gap-3">
            <img src="/Vector.png" alt="" />
            <img src="/Geld.svg" alt="" />
          </div>
          <div className=" *:flex *:justify-center">
            <h1 className="text-[#0F172A] text-2xl font-semibold">
              Welcome Back
            </h1>
            <p className="text-[#334155] text-base font-normal">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="*:mb-4">
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input type="password" className="grow" placeholder="password" />
            </label>
            <Link href="/dashboard">
              <button className="btn btn-info w-[100%] rounded-[20px]">
                Log in
              </button>
            </Link>
          </div>
          <div className="flex justify-center gap-3">
            <p className=" text-base font-normal text-[#0F172A]">
              Don’t have account ?
            </p>
            <Link href="/singup">
              <p className=" text-base font-normal text-[#0166FF]">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-[45%] h-[100vh]"></div>
    </div>
  );
};
