import { useMutation } from "@tanstack/react-query";
import addStatusService from "../services/addStatusService";
import { Status } from "../entities/Status";
import { useToast } from "@chakra-ui/react";

const useAddStatus = (profileId: number) => {
    const toast = useToast()
  return useMutation<FormData, Error, Status>({
    mutationFn: (data: FormData) => addStatusService.post<FormData>(profileId, data),
    
    onSuccess: (data) => {
      console.log(data);
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

export default useAddStatus;
