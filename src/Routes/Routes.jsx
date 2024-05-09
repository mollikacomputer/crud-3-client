import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
            loader: ()=> fetch('http://localhost:5000/blog')
        }
      ]
    },
  ]);

  export default router;