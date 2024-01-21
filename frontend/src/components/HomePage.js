import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container, Box, Text } from "@chakra-ui/react";
import { LoginPage } from "./LoginPage";
import { SignUp } from "./SignUp";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="bg-Background-500 h-screen w-screen overflow-hidden">
      <Container maxW="xl" centercontent="true">
        <Box d="flex" justifyContent="center">
          <Text className="Name_app">cUILD</Text>
        </Box>
        <LoginPage></LoginPage>
        <SignUp></SignUp>
      </Container>
    </div>
  );
};
