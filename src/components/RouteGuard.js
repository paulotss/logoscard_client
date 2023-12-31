import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const hasJWT = () => {
    let flag = false;
    sessionStorage.getItem('auth') ? flag = true : flag = false;
    return flag;
  }

  if (hasJWT()) {
    return children;
  }
  return <Navigate to={`/login`} replace />;
    
}

export default RouteGuard;
