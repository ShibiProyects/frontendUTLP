import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";

function AuthPage() {
  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link to={`/${PublicRoutes.AUTH}/${PublicRoutes.REGISTER}`}>
          Register
        </Link>
        <Link to={`/${PublicRoutes.AUTH}/${PublicRoutes.LOGIN}`}>Login</Link>
      </nav>

      <div className="h-[calc(100vh-40px)] ">
        <Outlet />
      </div>
    </>
  );
}
export default AuthPage;
