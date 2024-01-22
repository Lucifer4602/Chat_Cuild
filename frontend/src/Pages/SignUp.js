import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import "./SignUp.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toast = useToast();
  const history = useNavigate();

  const postDetails = async (image) => {
    setLoading(true);
    if (image === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(image);
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "cuild_HQ");
      data.append("cloud_name", "dgsmzzoph");
      await fetch("https://api.cloudinary.com/v1_1/dgsmzzoph/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const showTermsToast = () => {
    toast({
      title: "Please Agree to Terms and Conditions",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };

  const submitHandler = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (!isChecked) {
      showTermsToast();
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
        "http://127.0.0.1:5000/api",
        {
          name,
          email,
          password,
          image,
        },
        config
      );

      console.log("Full Response:", response);
      console.log("Registration Successful:", response.data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setLoading(false);
      history("/HomePage");
    } catch (error) {
      console.error("Error Occurred:", error);
      toast({
        title: "Error Occurred!",
        description: error.response?.data.message || "Unknown error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <VStack
      spacing="5px"
      bg="#270137"
      className="p-8 w-96 border-4 border-Foreground-500 rounded-lg justify-items-start"
    >
      <div className="mt-10"></div>
      <div className="SignUp_Head">Sign Up</div>
      <div className="mt-1"></div>
      <FormControl id="firstName" isRequired>
        <FormLabel className="SignUp_Text">Name</FormLabel>

        <Input
          bg="#20002E"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
      </FormControl>
      <div className="mt-1"></div>

      <FormControl id="email" isRequired>
        <FormLabel className="SignUp_Text">Email</FormLabel>

        <Input
          bg="#20002E"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
      </FormControl>
      <div className="mt-1"></div>
      <FormControl id="password" isRequired>
        <FormLabel className="SignUp_Text">Password</FormLabel>

        <Input
          bg="#20002E"
          type={"password"}
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
      </FormControl>
      <div className="mt-1"></div>

      <FormControl id="confirmPassword" isRequired>
        <FormLabel className="SignUp_Text">Confirm Password</FormLabel>

        <Input
          bg="#20002E"
          type={"password"}
          placeholder="Confirm your password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></Input>
      </FormControl>
      <div className="mt-1"></div>
      <FormControl id="image">
        <FormLabel className="SignUp_Text">Upload Your Image</FormLabel>

        <Input
          bg="#20002E"
          type={"file"}
          p={1.5}
          accept="image/*"
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        ></Input>
        <div className="mt-2"></div>
        <Checkbox
          colorScheme="blue"
          isRequired
          className="SignUp_Text space-x-2"
          isChecked={isChecked}
          onChange={checkboxChangeHandler}
        >
          I, hereby agree to the cUILD’s terms & conditions and, privacy policy,
          as specified <span className="HERE">here</span>
        </Checkbox>
      </FormControl>
      <div className="mt-2"></div>
      <Button
        color="white"
        background="#FF4230"
        borderRadius="0.5rem"
        onClick={() => {
          isChecked ? submitHandler() : showTermsToast();
        }}
        isLoading={loading}
        isDisabled={!isChecked}
      >
        Sign Up
      </Button>
    </VStack>
  );
};
