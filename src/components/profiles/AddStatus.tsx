import { Box, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useAddStatus from "../../hooks/useAddStatus";

interface Form {
  file: FileList;
}
interface Props {
  profileId:number
}
const AddStatus = ({profileId}:Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Form>();

  useAddStatus(profileId)
  const onSubmit = (data: Form) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    console.log(formData);
  };
  return (
    <Box padding={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="file" {...register("file")} />
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

export default AddStatus;
