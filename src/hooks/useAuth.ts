import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";
import { Credential, Token } from "../entities/Auth";
import { STORAGE_KEY_AUTH } from "../constants";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation<Token, Error, Credential>({
    mutationFn: (credential: Credential) => {
      return authService.post(credential);
    },

    onSuccess: (savedAuth) => {
      localStorage.setItem(STORAGE_KEY_AUTH, savedAuth.access);
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
export default useAuth;
