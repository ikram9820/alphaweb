import { Navigate, Outlet } from "react-router-dom";
import useUser from "./hooks/useUser";

const PrivateRoutes = () => {
  const user = useUser()

  if (user === null) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
