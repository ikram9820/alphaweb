import { FieldValues, useForm } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/form/Header";
import Bottom from "../components/form/Bottom";
import { User } from "../entities/User";
import useToProfile from "../hooks/useToProfile";
import useCreateUser from "../hooks/useCreateUser";
import FormButton from "../components/form/FormButton";

const SigupPage = () => {
  useToProfile();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<User>();
  
  const createUser = useCreateUser();
  const onSubmit = (data: FieldValues) => {
    createUser.mutate(data as User);
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
          <Header
            title="Sign up"
            description="to enjoy all of our cool features ✌️"
          />
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...register("first_name")} />
                </FormControl>

                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" {...register("last_name")} />
                </FormControl>
              </HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" {...register("username")} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
              <FormButton isDisabled={!isValid} text="Sign up" type="submit" />
              <Bottom text="Already a user?" link="login" linkText="Login" />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default SigupPage;
