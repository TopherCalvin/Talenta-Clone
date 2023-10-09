"use client";
import Attendance from "./analytics/components/attendance";
import Facility from "./analytics/components/facility";
import { ReactComponentElement, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import banner from "./analytics/Mekari-Pay-_-Article-Banner_2.webp";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Home() {
  const session = useSession();
  // useEffect(() => {
  //   if (!session.data) redirect("/login");
  // }, []);
  return (
    <main>
      <Attendance />
      <Facility />
      <Flex className="w-full justify-center">
        <Flex
          className="w-full max-w-[500px] justify-center relative p-2"
          borderRadius={"100px"}
        >
          <Image src={banner} alt="banner" className="rounded-xl" />
          <Icon
            as={AiFillCloseCircle}
            className="absolute top-3 right-4 text-2xl text-black text-opacity-50"
          />
        </Flex>
      </Flex>
      <Flex></Flex>
    </main>
  );
}
