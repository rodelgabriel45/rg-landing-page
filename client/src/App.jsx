import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import HeaderLayout from "./pages/HeaderLayout";
import FooterLayout from "./pages/FooterLayout";

const router = createBrowserRouter([
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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
