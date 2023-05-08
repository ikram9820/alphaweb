import ProfileHeader from "../components/profiles/ProfileHeader";
import StatusGrid from "../components/profiles/StatusGrid";
import useProfile from "../hooks/useProfile";
import useUser from "../hooks/useUser";

const ProfilePage = () => {
  const userid = useUser();
  const { data: profile, error } = useProfile(userid!);

  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      {profile && <ProfileHeader profile={profile} />}
      {profile?.pk && <StatusGrid profileId={profile.pk} />}
    </>
  );
};

export default ProfilePage;
