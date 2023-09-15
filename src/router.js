import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/accueil/Accueil"
import Contact from "./screens/contact/Contact"

const Routes = () => {
    const publicRoutes = [
        {
            path: '/',
            element: <Accueil />
        },
        {
            path: '/accueil',
            element: <Accueil />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        // {
        //     path: '/about',
        //     element: <About />
        // },
        // {
        //     path: '/nice',
        //     element: <Nice />
        // },
        // {
        //     path: '/monaco',
        //     element: <Monaco />
        // },
        // {
        //     path: '/begur',
        //     element: <Begur />
        // },
        // {
        //     path: '/aquarium',
        //     element: <Aquarium />
        // },
        // {
        //     path: '/sausset',
        //     element: <Sausset />
        // }
    ]
    const router = createBrowserRouter([
        ...publicRoutes
    ])
    return <RouterProvider router={router} />
}

export default Routes;