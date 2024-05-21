import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoginPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Navigate to="/admin-dash" /> : <Outlet />;
};

export default LoginPrivateRoute;
