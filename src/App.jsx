import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import ErrorPage from "./pages/Errorpage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AppPage from "./pages/AppPage";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                { path: "/", element: <HomePage /> },
                { path: "/product", element: <ProductPage /> },
                {
                    path: "/app",
                    element: <AppPage />,
                    children: [
                        {
                            index: true,
                            element: <Navigate replace to="cities" />,
                        },
                        {
                            path: "cities",
                            element: <CityList />,
                        },
                        {
                            path: "countries",
                            element: <CountryList />,
                        },
                        {
                            path: "city/:id",
                            element: <City />,
                        },
                    ],
                },
                { path: "*", element: <ErrorPage /> },
            ])}
        />
    );
}

export default App;
