import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Error from "../sharedComponents/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NeedVolunteers from "../pages/NeedVolunteer/NeedVolunteers";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerNeedPostDetails from "../pages/VolunteerNeedDetails/VolunteerNeedPostDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";

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
        {
          path: "/post/:id",
          element: <PrivateRoute><VolunteerNeedPostDetails /></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/post/${params.id}`)
        },
        {
          path: "/be/:id",
          element: <PrivateRoute><BeAVolunteer /></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/post/${params.id}`)
        },
      ],
    },
  ]);

export default router;