import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Error from "../sharedComponents/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NeedVolunteers from "../pages/NeedVolunteer/NeedVolunteers";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement : <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/need",
          element: <NeedVolunteers />,
        },
        {
          path: "/add",
          element: <AddVolunteerPost />,
        },
      ],
    },
  ]);

export default router;