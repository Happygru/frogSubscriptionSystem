import Layout from "./Layouts/Layout";
import AuthLayout from "./Layouts/AuthLayout";
import App from "./pages/App";
import NewApp from "./pages/App/New";
import SignIn from "./pages/Auth/signin";
import SignUp from "./pages/Auth/signup";
import Templates from "./pages/Templates";
import NotFoundPage from "./pages/NotFoundPage";
import Subscription from "./pages/Subscription";
import Profile from "./pages/Profile";
import Example from './pages/Example';

const AppRoutes = [
  {
    path: '/example',
    element: <Example />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/newapp",
        element: <NewApp />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
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
