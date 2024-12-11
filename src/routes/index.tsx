import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import TrackPage from "../pages/TrackPage";
import AuthorizationPage from "../pages/Authorization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizationPage />,
  },
  {
    path: "/search",
    element: <Home />,
  },
  {
    path: "/track/:isrc",
    element: <TrackPage />,
  },
]);

export default router;
