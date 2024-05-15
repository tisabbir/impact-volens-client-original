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

import UpdatePost from "../pages/UpdatePost/UpdatePost";
import ManageMyPost from "../pages/ManageMyPost/MyVolunteerRequestPost/ManageMyPost";

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
          path: "/manage",
          element: <PrivateRoute><ManageMyPost /></PrivateRoute>,
        },
        {
          path: "/add",
          element: <PrivateRoute><AddVolunteerPost /></PrivateRoute>,
        },
        {
          path: "/post/:id",
          element: <PrivateRoute><VolunteerNeedPostDetails /></PrivateRoute>,
          loader: ({params})=>fetch(`https://impact-volens-server.vercel.app/post/${params.id}`, {credentials: 'include'})
        },
        {
          path: "/be/:id",
          element: <PrivateRoute><BeAVolunteer /></PrivateRoute>,
          loader: ({params})=>fetch(`https://impact-volens-server.vercel.app/post/${params.id}`, {credentials: 'include'})
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdatePost /></PrivateRoute>,
          loader: ({params})=>fetch(`https://impact-volens-server.vercel.app/post/${params.id}`, {credentials: 'include'})
        },
      ],
    },
  ]);

export default router;