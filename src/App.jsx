import { Home } from "./pages/Home";
import { MyAccount } from "./pages/MyAccount";
import { MyOrder } from "./pages/MyOrder";
import { MyOrders } from "./pages/MyOrders";
import { SignIn } from "./pages/SignIn";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, useRoutes } from "react-router-dom";

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
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export { App };
