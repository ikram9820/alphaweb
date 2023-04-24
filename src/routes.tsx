import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SigupPage from "./pages/SigupPage";
import PrivateRoutes from "./PrivateRoutes";
import ChatRoom from "./components/ChatRoom";
import ReelsPage from "./pages/ReelsPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ReelsPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SigupPage /> },
      { path: "/reels", element: <ReelsPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          { path: ":id", element: <ChatRoom /> },
          { path: "profile", element: <ProfilePage /> },
        ],
      },
    ],
  },
]);
export default router;
