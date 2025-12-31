import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./pages/Errorpage";

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                { path: "*", element: <ErrorPage /> },
            ])}
        />
    );
}

export default App;
