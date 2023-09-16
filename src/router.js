import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/accueil/Accueil"
import Nice from "./screens/nice/Nice"
import LaCiotat from "./screens/laCiotat/LaCiotat"
import Monaco from "./screens/monaco/Monaco"
import Aquarium from "./screens/aquarium/Aquarium"
import GpMonaco from "./screens/gpMonaco/GpMonaco"
import About from "./screens/about/About"

const Routes = () => {
    const publicRoutes = [
        /*---------------------------------*/
        /*------------ ACCUEIL ------------*/
        /*---------------------------------*/
        {
            path: '/',
            element: <Accueil />
        },
        {
            path: '/accueil',
            element: <Accueil />
        },
        /*---------------------------------*/
        /*------------- ABOUT -------------*/
        /*---------------------------------*/
        {
            path: '/about',
            element: <About />
        },
        /*--------------------------------*/
        /*------------- NICE -------------*/
        /*--------------------------------*/
        {
            path: '/nice',
            element: <Nice />
        },
        /*---------------------------------*/
        /*----------- LA CIOTAT -----------*/
        /*---------------------------------*/
        {
            path: '/laciotat',
            element: <LaCiotat />
        },
        /*--------------------------------*/
        /*------------ MONACO ------------*/
        /*--------------------------------*/
        {
            path: '/monaco',
            element: <Monaco />
        },
        /*--------------------------------*/
        /*----------- AQUARIUM -----------*/
        /*--------------------------------*/
        {
            path: '/aquarium',
            element: <Aquarium />
        },
        /*---------------------------------*/
        /*----------- GP MONACO -----------*/
        /*---------------------------------*/
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