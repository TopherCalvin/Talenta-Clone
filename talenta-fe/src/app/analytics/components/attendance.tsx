"use client";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BiNotepad } from "react-icons/bi";
import { BsBoxArrowLeft, BsBoxArrowInRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";

export default function Attendance() {
  return (
    <Flex className="w-full justify-center bg-[#a61c1c] text-[#f1ffff] p-5">
      <Flex className="w-full max-w-[400px] flex-col gap-3">
        <Box>Good day,</Box>
        <Box>(name)</Box>
        <Flex>Don't miss your attendance today</Flex>
        <Flex className="bg-[#f1ffff] text-black rounded-md flex-col">
          <Flex className="flex-col p-2">
            <Box>N/H</Box>
            <Box>
              <Icon as={BiNotepad} /> {moment().format("DD MMM YYYY")} (shift
              start-end)
            </Box>
          </Flex>
          <Flex className="w-full border-t-2 border-solid border-[#f0f0f0] text-[#005fbf]">
            <Flex className="w-full border-r-2 border-solid border-[#f0f0f0] p-2 justify-between items-center">
              <Flex className="items-center gap-2">
                <Icon as={BsBoxArrowInRight} />
                Clock in
              </Flex>
              <Icon as={IoIosArrowForward} />
            </Flex>
            <Flex className="w-full p-2 justify-between items-center">
              <Flex className="items-center gap-2">
                <Icon as={BsBoxArrowLeft} />
                Clock out
              </Flex>
              <Icon as={IoIosArrowForward} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
