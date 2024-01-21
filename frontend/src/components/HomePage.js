import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container, Box, Text } from "@chakra-ui/react";
import { LoginPage } from "./LoginPage";
import { SignUp } from "./SignUp";

export const HomePage = () => {
  return (
    <Container maxW="xl" centercontent="true">
      <Box d="flex" justifyContent="center">
        <Text>Cuild</Text>
      </Box>
      <Box d="flex" justifyContent="center">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <LoginPage></LoginPage>
            </TabPanel>
            <TabPanel>
              <SignUp></SignUp>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
