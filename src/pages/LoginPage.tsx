import { FieldValues, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import Header from "../components/form/header";
import Bottom from "../components/form/Bottom";
import { Credential } from "../entities/Auth";

import useToProfile from "../hooks/useToProfile";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  useToProfile();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Credential>();

  const auth = useAuth();
  const onSubmit = (data: FieldValues) => {
    auth.mutate({ username: data["username"], password: data["password"] });
  };

  const toast = useToast();
  console.log(auth.data?.access);
  if (auth.isError)
   
  if (auth.isSuccess) return <Navigate to="/profile" />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Header title="Login" description="Login here..." />{" "}
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" {...register("username")} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isDisabled={!isValid}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
              <Bottom
                text="Don't Have An Account?"
                link="signup"
                linkText="Create An Account"
              />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default LoginPage;
