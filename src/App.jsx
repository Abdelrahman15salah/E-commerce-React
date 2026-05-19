import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Logout from "./components/Logout/Logout";
import { RouterProvider } from "react-router-dom";
import Electronics from "./components/Categories/Electronics/Electronics";
import Kitchen from "./components/Categories/Kitchen/Kitchen";
import Clothes from "./components/Categories/Clothes/Clothes";
import Cleaning from "./components/Categories/Cleaning/Cleaning";
import Jeans from "./components/Categories/Clothes/Jeans/Jeans";
import Shirts from "./components/Categories/Clothes/Shirts/Shirts";
import Shoes from "./components/Categories/Clothes/Shoes/shoes";
import { CounterProvider } from "./Context/appcontext";

let Routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Products",
        element: <Products />,
      },
      {
        path: "Categories",
        element: <Categories />,
        children: [
          { path: "Electronics", element: <Electronics /> },
          { path: "Kitchen", element: <Kitchen /> },
          {
            path: "Clothes",
            element: <Clothes />,
            children: [
              { path: "Jeans", element: <Jeans /> },
              { path: "Shirts", element: <Shirts /> },
              { path: "Shoes", element: <Shoes /> },
            ],
          },
          { path: "Cleaning", element: <Cleaning /> },
        ],
      },
      { path: "Brands", element: <Brands /> },
      { path: "Checkout", element: <Checkout /> },
      { path: "Cart", element: <Cart /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      {
        path: "Logout",
        element: <Logout />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
function App() {
  return (
    <>
      <CounterProvider>
        <RouterProvider router={Routing} />
      </CounterProvider>
    </>
  );
}
export default App;
