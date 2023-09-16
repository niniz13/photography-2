import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/accueil/Accueil"
import Contact from "./screens/contact/Contact"
import Nice from "./screens/nice/Nice"
import LaCiotat from "./screens/laCiotat/LaCiotat"
import Monaco from "./screens/monaco/Monaco"
import Aquarium from "./screens/aquarium/Aquarium"
import GpMonaco from "./screens/gpMonaco/GpMonaco"
import About from "./screens/about/About"

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
        {
            path: '/about',
            element: <About />
        },
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