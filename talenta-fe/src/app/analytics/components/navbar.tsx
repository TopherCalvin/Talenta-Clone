"use client";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { HiClipboardList, HiInbox } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <Flex className="w-full fixed bottom-0 justify-center bg-[#f2f2f3ff]">
      <Flex
        w={"100%"}
        maxW={"400px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex className="flex-col items-center text-xs sm:text-lg p-2 text-[#7b7c7d] hover:text-red-700">
          <Icon as={RiHome2Fill} className="text-lg" /> Home
        </Flex>
        <Flex className="flex-col items-center text-xs sm:text-lg p-2 text-[#7b7c7d] hover:text-red-700">
          <Icon as={FaUsers} className="text-lg" /> Employee
        </Flex>
        <Flex className="flex-col items-center text-xs sm:text-lg p-2 text-[#7b7c7d] hover:text-red-700">
          <Icon as={HiClipboardList} className="text-lg" />
          Request
        </Flex>
        <Flex className="flex-col items-center text-xs sm:text-lg p-2 text-[#7b7c7d] hover:text-red-700">
          <Icon as={HiInbox} className="text-lg" />
          Inbox
        </Flex>
        <Flex className="flex-col items-center text-xs sm:text-lg p-2 text-[#7b7c7d] hover:text-red-700">
          <Icon as={VscAccount} className="text-lg" />
          Account
        </Flex>
      </Flex>
    </Flex>
  );
}
