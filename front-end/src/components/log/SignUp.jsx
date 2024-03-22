import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // const schema = Yup.object().shape({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   password: Yup.string()
  //     .min(8, "Password is too short - should be 8 chars minimum.")
  //     .required("Password is required"),
  //   rePassword: Yup.string().oneOf(
  //     [Yup.ref("password"), null],
  //     "Passwords must match"
  //   ),
  // });

  const signUp = async () => {
    try {
      // await schema.validate(
      //   { name, email, password, rePassword },
      //   { abortEarly: false }
      // );

      const response = await fetch("http://localhost:8080/api/users", {
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
      console.error("Val error:", error);
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
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#F3F4F6]">
              <input
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                className="grow"
                placeholder="Re-password"
              />
            </label>
            <Link href="/currency">
              <button
                onClick={signUp}
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
