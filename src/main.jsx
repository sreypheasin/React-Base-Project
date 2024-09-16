import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Product from "./pages/product/Product.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
