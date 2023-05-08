import { Navigate, Outlet } from "react-router-dom";
import useUser from "./hooks/useUser";

const PrivateRoutes = () => {
  const token = useUser();
  if (token === null) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoutes;
