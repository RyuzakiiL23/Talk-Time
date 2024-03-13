import React from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "../../public/talk_time.png";

export default function SignUp(props) {
  return (
    <div className="w-[340px] relative flex flex-col p-4 rounded-md text-black bg-white">
      <Image
        src={logo}
        width={30}
        height={30}
        alt="Picture of the author"
        className="cursor-pointer mx-auto mb-4"
      />
      {/* <div className="text-2xl mb-2 text-[#1e0e4b] text-center">Talk Time</div> */}
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1e0e4b]">
        SignUp
      </h2>
      <form className="flex flex-col gap-3">
        <div className="block relative">
          <label
            for="fullName"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            for="username"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            for="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div class="block relative">
          <label
            for="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div class="block relative">
          <label
            for="passwordConfirmation"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="passwordConfirmation"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <RadioGroup className="flex" defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Felmale</Label>
          </div>
        </RadioGroup>
        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Have an account ?{" "}
        <a
          onClick={() => props.changeLog(true)}
          className="text-sm text-[#7747ff] cursor-pointer"
        >
          LogIn!
        </a>
      </div>
    </div>
  );
}
