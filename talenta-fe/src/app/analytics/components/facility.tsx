"use client";
import { BsBuildingFillCheck, BsCalendar2Week } from "react-icons/bs";
import { AiFillFileText, AiFillFile } from "react-icons/ai";
import { As, Box, Flex, Icon } from "@chakra-ui/react";
import { IoCalendarNumber } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { RiNewspaperFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { redirect } from "next/navigation";
import { BiTimer } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css";

export default function Facility() {
  interface Facility {
    name: string;
    logo: As;
    color: string;
  }
  const facility: Facility[] = [
    { name: "Reimbursement", logo: RiNewspaperFill, color: "#029e62" },
    { name: "Mekari Flex", logo: TiPlus, color: "#541fcf" },
    { name: "Time Off", logo: BsCalendar2Week, color: "#1454ff" },
    { name: "Attendance Log", logo: BiTimer, color: "#fc6d00" },
    { name: "Live Attendance", logo: BsBuildingFillCheck, color: "#f9bb09" },
    { name: "Calendar", logo: IoCalendarNumber, color: "#0099d0" },
    { name: "My Payslip", logo: BiMoneyWithdraw, color: "#029e62" },
    { name: "My Files", logo: AiFillFile, color: "#f9bb09" },
    { name: "Forms", logo: AiFillFileText, color: "#541fcf" },
  ];
  return (
    <main>
      <Flex className="w-full justify-center">
        <Swiper
          slidesPerView={3}
          grid={{ rows: 2 }}
          modules={[Pagination, Grid]}
        >
          {facility.map((fac) => {
            return (
              <SwiperSlide>
                <Flex
                  minW={"100px"}
                  className="flex-col items-center justify-center h-[110px] gap-2 text-[10px]"
                >
                  <Icon as={fac.logo} className="text-2xl" color={fac.color} />
                  <Box>{fac.name}</Box>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </main>
  );
}
