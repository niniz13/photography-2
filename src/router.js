import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Accueil from "./screens/Accueil"
// import About from "./screens/About"
import NotFound from "./components/NotFound"

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
        //         /*---------------------------------*/
        //         /*------------- ABOUT -------------*/
        //         /*---------------------------------*/
        //         {
        //             path: '/about',
        //             element: <About />
        //         },
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