import { Heading, Text, Flex, Box, Avatar, Stack } from "@chakra-ui/react";
import { NO_IMAGE } from "../../constants";
import { Profile } from "../../entities/Profile";
import useUser from "../../hooks/useUser";

interface Props {
  profile: Profile;
}

const ProfileHeader = ({ profile }: Props) => {
  const user_id = useUser();

  return (
    <Stack padding="25px">
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
        <Avatar width={20} height={20} name="Segun Adebayo" src={NO_IMAGE} />
        <Box>
          <Heading size="sm">{profile.user || "username"}</Heading>
          <Text>{`${profile.country || "country"}, ${
            profile.language || "language"
          }, ${profile.profession || "profession"}`}</Text>
          <Text>{profile.bio || "user bio"}</Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default ProfileHeader;
