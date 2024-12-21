import { Link } from "react-router-dom";
import { CommonRoutes, StudentRoutes, TeacherRoutes } from "@/routes/routes";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { useUserContext } from "@/context/UserProvider";
import { Roles } from "@/models/user.model";

function NavBar({ children, role }: { children?: ReactNode; role: Roles }) {
  const { logout } = useUserContext();

  const routeMain = () => {
    if (role == Roles.TEACHER_ROLE) return TeacherRoutes.TEACHER;
    if (role == Roles.STUDENT_ROLE) return StudentRoutes.STUDENT;
  };

  return (
    <nav className=" font-semibold h-[60px] bg-blue text-white   flex  justify-around items-center ">
      <Link to={`/${routeMain()}/${CommonRoutes.HOME}`} replace>
        Home
      </Link>
      <Link to={`/${routeMain()}/${CommonRoutes.ACCOUNT}`} replace>
        Account
      </Link>
      {children}

      <Button
        className="text-white p-2 rounded-lg font-semibold"
        onClick={logout}
        variant="destructive"
      >
        Cerrar sesión
      </Button>
    </nav>
  );
}
export default NavBar;
