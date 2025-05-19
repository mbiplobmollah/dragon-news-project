import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {path: '', element: <Home></Home>},
                {path: '/category/:id', element: <CategoryNews></CategoryNews>, 
                loader: () => fetch('/news.json')
            },

            ]

        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path:'/auth/login',
                    element: <Login></Login>
                },
                {
                    path:'/auth/register',
                    element: <Register></Register>
                },
            ]
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error 404</h2>
        }
    ]
)

export default router ;