import { Navigate, Outlet } from "react-router";
import { Roles } from "../models/user.model";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "../routes/routes";

function AuthGuard({ role }: { role: Roles }) {
  const roleStorage = localStorage.getItem("role");

  if (!roleStorage) {
    return <Navigate to={`/${PublicRoutes.LOGIN}`} replace />;
  }

  if (roleStorage !== role) {
    switch (roleStorage) {
      case Roles.STUDENT_ROLE:
        return <Navigate to={`/${StudentRoutes.STUDENT}`} replace />;

      case Roles.TEACHER_ROLE:
        return <Navigate to={`/${TeacherRoutes.TEACHER}`} replace />;
    }
  }

  return <Outlet />;
}

export default AuthGuard;
