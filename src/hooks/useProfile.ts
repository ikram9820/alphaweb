import { useQuery } from "@tanstack/react-query";
import profileService from "../services/profileService";
import { Profile } from "../entities/Profile";

const useProfile = (userId: number) => {
  return useQuery<Profile, Error, Profile>({
    queryKey: ["profiles", userId],
    queryFn: () => profileService.get(userId),
  });
};

export default useProfile;
