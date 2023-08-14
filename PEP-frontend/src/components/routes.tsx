import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/Login";
import Home from "../routing/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/memberarea", element: <LoginPage /> },
]);

export default router;
