"use client";
import Attendance from "./analytics/components/attendance";
import Facility from "./analytics/components/facility";
import { ReactComponentElement, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import banner from "./analytics/Mekari-Pay-_-Article-Banner_2.webp";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  const session = useSession();
  const [display, setDisplay] = useState(true);
  // useEffect(() => {
  //   if (!session.data) redirect("/login");
  // }, []);
  return (
    <main>
      <Attendance />
      <Facility />
      <Flex className="w-full justify-center">
        <Flex
          className="w-full max-w-[400px] justify-center relative p-2"
          borderRadius={"100px"}
          display={display ? "flex" : "none"}
        >
          <Image src={banner} alt="banner" className="rounded-xl" />
          <Icon
            as={AiFillCloseCircle}
            onClick={() => setDisplay(false)}
            cursor={"pointer"}
            className="absolute top-3 right-4 text-2xl text-black text-opacity-50"
          />
        </Flex>
      </Flex>
      <Flex className="w-full flex-col items-center gap-3">
        <Flex className="w-full max-w-[400px] flex-col items-center gap-3">
          <Flex className="w-full justify-between p-3">
            <Box className="font-bold">Announcement</Box>
            <Link href={"/"} className="text-blue">
              View All
            </Link>
          </Flex>
          <Flex className="w-full flex-col items-center">
            <Box className="font-bold text-sm">No anouncement yet</Box>
            <Box className="text-xs">Your announcement will show here</Box>
          </Flex>
        </Flex>
        <Flex className="w-full max-w-[400px] flex-col items-center gap-3">
          <Flex className="w-full justify-between p-3">
            <Box className="font-bold">Tasks</Box>
            <Link href={"/"} color="#7a98ca">
              View All
            </Link>
          </Flex>
          <Flex className="w-full flex-col items-center">
            <Box className="font-bold  text-sm">No task</Box>
            <Box className="text-xs">You don't have any pending task</Box>
          </Flex>
        </Flex>
        <Flex className="w-full max-w-[400px] flex-col items-center gap-3">
          <Flex className="w-full justify-between p-3">
            <Box className="font-bold">Timesheet</Box>
            <Link href={"/"} color="#7a98ca">
              Go to Time Tracker
            </Link>
          </Flex>
          <Flex className="w-full flex-col items-center">
            <Box className="font-bold text-sm">No timesheet</Box>
            <Box className="text-xs">
              As you record timesheet, they'll show up here
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
