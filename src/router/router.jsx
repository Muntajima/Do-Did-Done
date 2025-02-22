import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Home/Registration/SignUp";
import SignIn from "../pages/Home/Registration/SignIn";
import Tasks from "../pages/Home/Task/Tasks";
import Dashboard from "../Layout/Dashboard";
import Update from "../pages/Home/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/tasks',
        element: <Tasks />,
        loader: () => fetch('http://localhost:5000/tasks')
      },
      {
        path: '/dashboard/update/:id',
        element: <Update/>,
        loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
      }
    ]
    }
]);