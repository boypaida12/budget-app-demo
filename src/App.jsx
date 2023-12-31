/* eslint-disable react/prop-types */
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom/dist";
import { useAuth } from "./Config/firebase";

// Layout
import RootLayout from "./Layout/RootLayout";
import LoadingIndicator from "./components/LoadingIndicator";
import Home from "./pages/dashboard/Home";
import Expense from "./pages/dashboard/Expense";
import Budget from "./pages/dashboard/Budget";
import Help from "./pages/Help";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Pages


const App = () => {
  // Get the current user
  const currentUser = useAuth();

  // Determine if the user is authenticated
  const isAuthenticated = !!currentUser;

  // Determine if the user is logged out
  const isLoggedOut = currentUser === null;

  // Protected Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <RootLayout isAuthenticated={isAuthenticated} />
            ) : isLoggedOut ? (
              <Navigate to="/login" /> // Redirect to login when logged out
            ) : (
              <LoadingIndicator />
            )
          }
        >
          <Route index element={isAuthenticated ? <Home /> : null} />
          <Route path="expenses" element={<Expense />} />
          <Route path="budgets" element={<Budget />} />
          <Route path="support" element={<Help />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="register" element={<Register />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
