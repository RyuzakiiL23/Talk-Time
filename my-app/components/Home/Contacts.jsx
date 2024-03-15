import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const data = JSON.parse(localStorage.getItem('chat-user'));
console.log(data);

export default function Contacts() {
	return (
		<div className="flex flex-col relative w-full">
			<div className="flex justify-between items-center mx-4 ">
				<h2 className="text-xl font-semibold my-4">Contacts</h2>
			</div>
		</div>
	);
}
