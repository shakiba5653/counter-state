import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Counter from "./pages/counter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about-us",
    element: <Aboutus />,
  },
  {
    path: "/contact-us",
    element: <Contactus />,
  },
  {
    path: "/counter",
    element: <Counter />
  }
])
function Router() {
  return (
    <RouterProvider router={router} />
  )
}
export default Router;
