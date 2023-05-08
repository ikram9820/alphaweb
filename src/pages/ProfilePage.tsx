import ProfileHeader from "../components/profiles/ProfileHeader";
import StatusGrid from "../components/profiles/StatusGrid";
import useProfile from "../hooks/useProfile";
import useUser from "../hooks/useUser";

const ProfilePage = () => {
  const userid = useUser();
  const { data, error } = useProfile(userid!);
  console.log(data);
  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      {data && <ProfileHeader profile={data} />}
      <StatusGrid />
    </>
  );
};

export default ProfilePage;
