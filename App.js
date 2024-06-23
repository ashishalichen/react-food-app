import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header"
import Body from "./src/Components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./src/Components/Contact"
import Error from "./src/Components/Error"
import Shimmer from "./src/Components/Shimmer"
import RestaurantMenu from "./src/Components/RestaurantMenu"
import UserContext from "./src/Utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./src/Utils/appStore"
import Cart from "./src/Components/Cart"





const About = lazy(() => import("./src/Components/About"))

function App() {

    const [userName, setUserName] = useState()
    // Supposed Authenticaton
    useEffect(() => {
        const userData = {
            name: 'Ashish Alichen'
        }
        setUserName(userData.name)

    }, [])

    return <>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </Provider>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h2>Loading</h2>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },

])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
)