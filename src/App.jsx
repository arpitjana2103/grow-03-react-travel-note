import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./pages/Errorpage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                { path: "/", element: <HomePage /> },
                { path: "/product", element: <ProductPage /> },
                { path: "*", element: <ErrorPage /> },
            ])}
        />
    );
}

export default App;
