import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MyAccount } from "./Pages/MyAccount";
import { MyOrder } from "./Pages/MyOrder";
import { MyOrders } from "./Pages/MyOrders";
import { SignIn } from "./Pages/SignIn";
import { NotFound } from "./Pages/NotFound";
import { Navbar } from "./Components/Navbar";
import { Layout } from "./Components/Layout";
import { ShoppingCartProvider } from "./Context";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    {
      path: "/my-orders",
      element: <MyOrders />,
      children: [
        {
          path: ":id",
          element: <MyOrder />,
        },
      ],
    },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export { App };
