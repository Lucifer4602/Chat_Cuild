import React from "react";
import { Text } from "@chakra-ui/react";
import { LoginPage } from "./LoginPage";
import { SignUp } from "./SignUp";
import "./Registration.css";
/* */
export const RegistrationPage = () => {
  return (
    <div
      className="bg-Background-500 h-screen w-screen
     box-border overflow-hidden  flex flex-row justify-evenly fixed"
    >
      <div className=" mt-16">
        <Text className="Name_app ">cUILD</Text>
      </div>

      <div className="flex flex-col justify-end ">
        <LoginPage></LoginPage>
      </div>
      <div className="flex flex-col justify-start">
        <SignUp />
      </div>
    </div>
  );
};
