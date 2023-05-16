import AddStatus from "../components/profiles/AddStatus";
import ProfileHeader from "../components/profiles/ProfileHeader";
import StatusGrid from "../components/profiles/StatusGrid";
import useProfile from "../hooks/useProfile";
import useUser from "../hooks/useUser";

const ProfilePage = () => {
  const user = useUser();
  const { data: profile, error } = useProfile(user?.user_id!);

  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      {profile && <ProfileHeader profile={profile} />}
      {profile && <AddStatus />}
      {profile?.pk && <StatusGrid profileId={profile.pk} />}
    </>
  );
};

export default ProfilePage;
