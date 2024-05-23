import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import HeaderLayout from "./pages/HeaderLayout";
import FooterLayout from "./pages/FooterLayout";
import AdminLogin from "./pages/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPrivateRoute from "./components/LoginPrivateRoute";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HeaderLayout />,
        children: [
          {
            path: "/",
            element: <FooterLayout />,
            children: [
              { index: true, element: <Home /> },
              { path: "/about", element: <About /> },
              { path: "/portfolio", element: <Portfolio /> },
              { path: "/contact", element: <Contact /> },
              {
                element: <PrivateRoute />,
                children: [
                  { path: "/admin-dash", element: <AdminDashboard /> },
                ],
              },
              {
                element: <LoginPrivateRoute />,
                children: [{ path: "/admin-login", element: <AdminLogin /> }],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
