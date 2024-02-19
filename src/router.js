import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/Accueil"
import About from "./screens/About"
import NotFound from "./components/NotFound"
import Gears from "./screens/Gears"

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
        /*---------------------------------*/
        /*------------- GEARS -------------*/
        /*---------------------------------*/
        {
            path: '/gears',
            element: <Gears />
        },
        /*----------------------------------*/
        /*------------- ERREUR 404 ----------*/
        /*----------------------------------*/
        {
            path: '*',
            element: <NotFound />
        }
    ]
    const router = createBrowserRouter([
        ...publicRoutes
    ])
    return <RouterProvider router={router} />
}

export default Routes;