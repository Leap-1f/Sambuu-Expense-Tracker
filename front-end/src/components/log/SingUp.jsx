import Link from "next/link";
export const SingUp = () => {
  return (
    <div className="flex">
      <div className="h-[100vh] w-[55%] flex justify-center items-center">
        <div className="w-[40%] *:pb-10 ml-[100px]">
          <div className="flex justify-center gap-3">
            <img src="/Vector.png" alt="" />
            <img src="/Geld.svg" alt="" />
          </div>
          <div className=" *:flex *:justify-center">
            <h1 className="text-[#0F172A] text-2xl font-semibold">
              Create Geld account
            </h1>
            <p className="text-[#334155] text-base font-normal">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="*:mb-4">
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input type="text" className="grow" placeholder="Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                type="password"
                className="grow"
                placeholder="Re-password"
              />
            </label>
            <Link href="/currency">
              <button className="btn btn-info w-[100%] rounded-[20px]">
                Sign up
              </button>
            </Link>
          </div>
          <div className="flex justify-center gap-3">
            <p className=" text-base font-normal text-[#0F172A]">
              Already have account ?
            </p>
            <Link href="/">
              <p className=" text-base font-normal text-[#0166FF]">Log in</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-[45%] h-[100vh]"></div>
    </div>
  );
};

// import React from "react";
// import * as Yup from "yup";

// const emailSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Please enter a valid email")
//     .required("Email is required"),
// });

// export const SingUp = () => {
//   const [email, setEmail] = React.useState("");
//   const [emailError, setEmailError] = React.useState("");

//   const onChange = ({ target }) => {
//     setEmail(target.value);
//     emailSchema
//       .validate({ email: target.value })
//       .then(() => setEmailError(""))
//       .catch((err) => setEmailError(err.errors[0]));
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <input
//         type="email"
//         label="Email"
//         value={email}
//         onChange={onChange}
//         className="w-full max-w-[24rem] pr-20"
//         containerProps={{
//           className: "min-w-0",
//         }}
//       />
//       {emailError && <p className="text-red-500">{emailError}</p>}
//       <button
//         size="sm"
//         color={email ? "blue" : "gray"}
//         disabled={!email}
//         className="mt-4 w-full rounded-[20px]"
//       >
//         Sign up
//       </button>
//     </div>
//   );
// };
