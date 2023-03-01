import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./redux/store";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const AppLayout = () => {
  return (
    <UserAuthContextProvider>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </UserAuthContextProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
