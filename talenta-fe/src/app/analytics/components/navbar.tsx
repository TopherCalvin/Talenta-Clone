"use client";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { HiClipboardList, HiInbox } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <Flex className="w-full fixed bottom-0 justify-center">
      <Flex w={"100%"} maxW={"500px"} justifyContent={"space-between"}>
        <Flex className="flex-col items-center text-lg p-2 w-full max-w-[100px] text-[#7b7c7d] hover:text-red-700">
          <Icon as={RiHome2Fill} /> Home
        </Flex>
        <Flex className="flex-col items-center text-lg p-2 w-full max-w-[100px] text-[#7b7c7d] hover:text-red-700">
          <Icon as={FaUsers} /> Employee
        </Flex>
        <Flex className="flex-col items-center text-lg p-2 w-full max-w-[100px] text-[#7b7c7d] hover:text-red-700">
          <Icon as={HiClipboardList} />
          Request
        </Flex>
        <Flex className="flex-col items-center text-lg p-2 w-full max-w-[100px] text-[#7b7c7d] hover:text-red-700">
          <Icon as={HiInbox} />
          Inbox
        </Flex>
        <Flex className="flex-col items-center text-lg p-2 w-full max-w-[100px] text-[#7b7c7d] hover:text-red-700">
          <Icon as={VscAccount} />
          Account
        </Flex>
      </Flex>
    </Flex>
  );
}
