import Layout from "./Layouts/Layout";
import AuthLayout from "./Layouts/AuthLayout";
import App from "./pages/App";
import SignIn from "./pages/Auth/signin";
import SignUp from "./pages/Auth/signup";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Statistics from "./pages/Statistics";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings"

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: 'customers',
        element: <Customer />
      },
      {
        path: "/apps",
        element: <App />,
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/accounts",
        element: <Accounts />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default AppRoutes;
