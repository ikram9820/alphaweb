import { FieldValues, useForm } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import Header from "../components/form/Header";
import Bottom from "../components/form/Bottom";
import { Credential } from "../entities/Auth";

import useToProfile from "../hooks/useToProfile";
import FormButton from "../components/form/FormButton";

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
              <FormButton isDisabled={!isValid} text="Login" type="submit" />
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
