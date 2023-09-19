"use client";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { Icon, Input, InputGroup, FormControl } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import talenta from "../analytics/talenta_logo.png";
import Image from "next/image";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { signIn } from "next-auth/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
export default function Login() {
  YupPassword(Yup);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .minUppercase(1, "Password must contain at least 1 uppercase letter")
        .minNumbers(1, "Password must contain at least 1 number")
        .required("Password is required"),
    }),
    onSubmit: (): void => {
      try {
        setIsLoading(true);
        signIn("credentials", { ...formik.values, redirect: false }).then(
          (callback) => {
            if (callback?.ok) {
              router.refresh();
              router.push("/");
            } else if (callback?.error) {
              throw new Error("Wrong Credentials");
            }
          }
        );
      } catch (error) {
        setShowErr(true);
      } finally {
        setIsLoading(false);
      }
    },
  });
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    formik.setFieldValue(e.target.id, e.target.value);
  }
  return (
    <Center className="w-full py-16">
      <Flex className="flex-col px-5 min-[577px]:px-10 w-full max-w-[440px] bg-white py-10 gap-10">
        <Box className="w-full">
          <Image src={talenta} alt="logo" className="w-[150px]" />
        </Box>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-between gap-5"
        >
          <Box display={showErr ? "flex" : "none"} className="bg-[#f7d9d3ff]">
            <Icon as={BsXCircle} />{" "}
            {formik.errors.email || formik.errors.password}
          </Box>
          <Box className="text-3xl">Sign in</Box>
          <FormControl>
            <label>Email</label>
            <Input id="email" type="text" onChange={inputHandler} />
          </FormControl>
          <FormControl>
            <label>Password</label>
            <InputGroup>
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                onChange={inputHandler}
              />
              <InputRightElement
                onClick={(): void => {
                  setShowPass(!showPass);
                }}
              >
                <Icon
                  fontSize={"2xl"}
                  as={showPass ? AiFillEyeInvisible : AiFillEye}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            className="w-full bg-[#005fbfff] text-white hover:bg-opacity-50"
            _hover={{ bgColor: "#004c99ff" }}
            type="submit"
            isLoading={isLoading}
          >
            Sign in
          </Button>
        </form>
      </Flex>
    </Center>
  );
}
