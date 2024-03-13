import React from "react";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosAttach, IoMdSend } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import {
  RiMessage3Line,
  RiSettings2Line,
  RiMoonLine,
  RiSunLine,
  RiGroupLine,
  RiContactsLine,
} from "react-icons/ri";
import { GiMagicHat } from "react-icons/gi";
import Image from "next/image";
import logo from "../../public/talk_time.png";

export default function Home() {
  return (
    <div className="flex relative w-screen h-screen">
      <div className="flex relative w-[620px] h-full bg-[#F5F7FB]">
        <div className="flex flex-col items-center justify-between py-4 w-20 h-full bg-white">
          <div>
            <Image
              src={logo}
              width={30}
              height={30}
              alt="Picture of the author"
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="p-4 text-xl text-gray-500 ">
              <LuUser2 className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
            </div>
            <div className="p-4 text-xl text-gray-500 ">
              <RiMessage3Line className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]"/>
            </div>
            <div className="p-4 text-xl text-gray-500 ">
              <RiGroupLine className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]"/>
            </div>
            <div className="p-4 text-xl text-gray-500 ">
              <RiContactsLine className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]"/>
            </div>
            <div className="p-4 text-xl text-gray-500 ">
              <RiMoonLine className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]"/>
            </div>
            <div className="p-4 text-xl text-gray-500 ">
              <RiSettings2Line className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]"/>
            </div>
          </div>
          <div>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex flex-col relative w-full border">
          <div className="mx-4 ">
            <h2 className="text-xl font-semibold my-4">Chats</h2>
            <div className="flex bg-[#E6EBF5] items-center h-10 rounded  ">
              <div className="p-4 text-xl text-gray-500 ">
                <CiSearch />
              </div>
              <input
                className="focus:outline-none bg-[#E6EBF5] text-gray-500 text-sm "
                type="text"
                placeholder="Search messages or users"
              />
            </div>
            <div className="flex justify-around my-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <h3 className="text-md mt-4">Recent</h3>
              <div className="overflow-auto scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin h-[580px]">
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
                <div className="flex cursor-pointer relative p-2 w-full rounded h-20 items-center ease-in duration-150 hover:bg-[#E6EBF5]">
                  <div className="mr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="text-sm">UserName</h4>
                    <p className="text-gray-500 text-xs">
                      hey! there I'm available
                    </p>
                  </div>
                  <div className="absolute text-gray-500 text-xs right-2">
                    <p>02:50 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full border solid">
        <div className="h-20 border-b px-8">
          <div className="flex relative p-2 px w-full rounded h-20 items-center ease-in duration-150 ">
            <div className="mr-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h4 className="text-sm">UserName</h4>
            </div>
            <div className="flex absolute text-gray-500 text-xl gap-4 right-2">
              <CiSearch className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
              <IoCallOutline className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
              <MdOutlineVideoCameraFront className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
              <LuUser2 className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
              <HiDotsHorizontal className="cursor-pointer font-extrabold ease-in duration-150 hover:text-[#7269EF]" />
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="flex items-center space-between absolute h-20 w-full p-8 border-t bottom-0">
          <div className="flex bg-[#E6EBF5] items-center h-10 w-full rounded mr-8 ">
            <input
              className="focus:outline-none w-full px-4 bg-[#E6EBF5] text-gray-500 text-sm "
              type="text"
              placeholder="Enter Message ..."
            />
          </div>
          <div className="flex items-center gap-4">
            <BsEmojiSmile className="cursor-pointer text-[#7269EF] h-5 w-5" />
            <IoIosAttach className="cursor-pointer text-[#7269EF] h-5 w-5" />
            <CiImageOn className="cursor-pointer text-[#7269EF] h-5 w-5" />
            <IoMdSend className="cursor-pointer text-white h-8 w-8 p-2 bg-[#7269EF] rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
