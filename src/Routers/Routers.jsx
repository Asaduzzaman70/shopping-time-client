import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsShowcase from "../Home/ProductsShowcase/ProductsShowcase";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductsShowcase />
            }
        ]
    }
])