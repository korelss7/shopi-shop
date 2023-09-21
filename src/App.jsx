import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyAccount } from "./pages/MyAccount";
import { MyOrder } from "./pages/MyOrder";
import { MyOrders } from "./pages/MyOrders";
import { SignIn } from "./pages/SignIn";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { ShoppingCartProvider } from "./Context";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
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
