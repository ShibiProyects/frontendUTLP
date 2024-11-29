import { Outlet, useNavigate } from "react-router";
import { useUserContext } from "../context/UserProvider";
import { PublicRoutes } from "../routes/routes";

type AuthGuardProps = {
  role: "student" | "teacher";
};

function AuthGuard({ role }: AuthGuardProps) {
  const navigate = useNavigate();
  const { user } = useUserContext();

  if (user?.role == role) {
    return <Outlet />;
  } else {
    return navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }
}

export default AuthGuard;
