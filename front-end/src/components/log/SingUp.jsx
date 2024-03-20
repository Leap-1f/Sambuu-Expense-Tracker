import Link from "next/link";
import { useState } from "react";
export const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const signUp = async () => {
    try {
      await schema.validate(
        { name, email, password, rePassword },
        { abortEarly: false }
      );

      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, rePassword }),
      });

      const newData = await response.json();
      console.log(newData);
    } catch (error) {
      // Handle validation errors
      console.error("Validation error:", error);
    }
  };
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
              <input
                onChange={(el) => setName(el.target.value)}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(el) => setEmail(el.target.value)}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(el) => setPassword(el.target.value)}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(el) => setRePassword(el.target.value)}
                type="password"
                className="grow"
                placeholder="Re-password"
              />
            </label>
            <Link href="/currency">
              <button
                onClick={SingUp}
                className="btn btn-info w-[100%] rounded-[20px]"
              >
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

// function CreatePage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");

//   // Define Yup schema for form validation
//   const schema = Yup.object().shape({
//     name: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     rePassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Password confirm is required"),
//   });

//   const signUp = async () => {
//     try {
//       // Validate form data using Yup schema
//       await schema.validate(
//         { name, email, password, rePassword },
//         { abortEarly: false }
//       );

//       const response = await fetch("http://localhost:8080/api/signUp", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password, rePassword }),
//       });

//       const newData = await response.json();
//       console.log(newData);
//     } catch (error) {
//       // Handle validation errors
//       console.error("Validation error:", error);
//     }
//   };
// return (
//   <div className="w-[100%] h-[100vh] flex justify-center">
//     <div className="w-[50%] flex justify-center items-center bg-white pl-[222px] pr-[126px] ">
//       <div className="w-[384px] h-[555px]  flex flex-col items-center gap-[40px]">
//         <div className="flex p-[5px] items-center gap-[10px] ">
//           <Geld width="94" heigth="36"></Geld>
//         </div>{" "}
//         <div className="flex flex-col items-center gap-[8px]">
//           <p className="text-[24px] text-black">Create Geld account</p>
//           <p className="text-[16px] text-black">
//             Sign up below to create your Wallet account
//           </p>
//         </div>
//         <div className="w-[100%] h-[48px] h-fixed">
//           <div className="flex flex-col gap-[16px]">
//             <label className="input input-bordered flex text-black h-[50px] border-gray-500 bg-gray-200 border  items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="w-4 h-4 opacity-70"
//               >
//                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//               </svg>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="grow"
//                 placeholder="Username"
//               />
//             </label>
//             <label className="input input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border text-black">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="w-4 h-4 opacity-70"
//               >
//                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//               </svg>
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="grow"
//                 placeholder="Email"
//               />
//             </label>
//             <label className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="w-4 h-4 opacity-70"
//               >
//                 <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
//               </svg>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className=""
//                 placeholder="Password"
//               />
//             </label>
//             <label className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="w-4 h-4 opacity-70"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <input
//                 type="password"
//                 value={rePassword}
//                 onChange={(e) => setRePassword(e.target.value)}
//                 className=""
//                 placeholder="Re-enter Password"
//               />
//             </label>
//           </div>
//           <Link
//             href={"/Currency"}
//             onClick={signUp}
//             disabled={
//               name === "" ||
//               email === "" ||
//               password === "" ||
//               rePassword === ""
//             }
//             className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl"
//           >
//             Sign Up
//           </Link>
//           <div className="flex items-center justify-center gap-[10px]">
//             <p className="text-[16px] text-black">Already have an account?</p>
//             <Link href="/Login">
//               <p className="text-blue-500 text-[16px]">Log In</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-[50%] bg-blue-600"></div>
//   </div>
// );
// }

// export default CreatePage;
//================================================

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
