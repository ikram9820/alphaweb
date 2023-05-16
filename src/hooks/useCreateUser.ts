import { useMutation } from "@tanstack/react-query";
import createUserService from "../services/createUserService";
import { User } from "../entities/User";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useCreateUser = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation<User, Error, User>({
    mutationFn: (user: User) => {
      console.log("mutating user...");
      return createUserService.post(user);
    },
    onSuccess: (savedUser) => {
      console.log(savedUser);
      navigate("/profile");
    },
    onError: (error) => {
      toast({
        title: error.name,
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });
};
export default useCreateUser;
