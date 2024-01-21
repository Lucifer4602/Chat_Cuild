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
     box-border overflow-hidden relative"
    >
      <Text className="Name_app absolute left-14 top-14 ">cUILD</Text>

      <LoginPage />
      <SignUp />
    </div>
  );
};
