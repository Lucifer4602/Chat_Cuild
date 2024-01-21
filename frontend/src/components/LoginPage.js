import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        { email, password },
        config
      );
      console.log("Full Response:", response);

      console.log("Registration Successful:", response.data);

      if (response.data) {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });

        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setLoading(false);

        // Use navigate instead of history
        navigate("/chats");
      } else {
        // Handle the case when response.data is undefined or falsy
        toast({
          title: "Error Occurred!",
          description: "Unexpected response format",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message || "An unexpected error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px" bg="#270137">
      <div className="Login_Page_Text">Login</div>
      <FormControl id="Login_email" isRequired>
        <FormLabel className="Login_Headings">Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="Login_password" isRequired>
        <FormLabel className="Login_Headings">Password</FormLabel>
        <Input
          bg="#20002E"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        color="white"
        background="#FF4230"
        borderRadius="0.5rem"
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};
