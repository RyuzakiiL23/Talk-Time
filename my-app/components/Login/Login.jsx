"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/talk_time.png";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const data = fetch()
  //   };
  // });

  return (
    <div className="w-[340px] relative flex flex-col p-4 rounded-md text-black bg-white">
      <Image
        src={logo}
        width={30}
        height={30}
        alt="Picture of the author"
        className="cursor-pointer mx-auto mb-4"
      />
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1e0e4b]">
        Login
      </h2>
      <form /* onSubmit={handleSubmit} */ className="flex flex-col gap-3">
        <div className="block relative">
          <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="block relative">
          <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            value={username}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div>
        <button
          // type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{" "}
        <a
          onClick={() => props.changeLog(false)}
          className="text-sm text-[#7747ff] cursor-pointer"
        >
          Sign up for free!
        </a>
      </div>
    </div>
  );
}
