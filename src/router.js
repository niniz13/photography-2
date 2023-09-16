import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/accueil/Accueil"
import Contact from "./screens/contact/Contact"
import Nice from "./screens/nice/Nice"

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
        {
            path: '/nice',
            element: <Nice />
        },
        {
            path: '/laciotat',
            element: <LaCiotat />
        },
        {
            path: '/monaco',
            element: <Monaco />
        },
        {
            path: '/aquarium',
            element: <Aquarium />
        },
        {
            path: '/gpmonaco',
            element: <GpMonaco />
        }
    ]
    const router = createBrowserRouter([
        ...publicRoutes
    ])
    return <RouterProvider router={router} />
}

export default Routes;