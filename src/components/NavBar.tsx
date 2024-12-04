import { Link } from "react-router-dom";
import {
  CommonRoutes,
  StudentRoutes,
  TeacherRoutes,
} from "../../routes/routes";
import { useUserContext } from "../../context/UserProvider";
import { ReactNode } from "react";
import { Roles } from "../../models/user.model";

function NavBar({ children, role }: { children?: ReactNode; role: Roles }) {
  const { logout } = useUserContext();

  const routeMain = () => {
    if (role == Roles.TEACHER_ROLE) return TeacherRoutes.TEACHER;
    if (role == Roles.STUDENT_ROLE) return StudentRoutes.STUDENT;
  };

  return (
    <nav className=" h-[40px] bg-dark text-white flex py-8 justify-around items-center ">
      <Link to={`/${routeMain()}/${CommonRoutes.HOME}`} replace>
        Home
      </Link>
      <Link to={`/${routeMain()}/${CommonRoutes.ACCOUNT}`} replace>
        Account
      </Link>
      {children}

      <button
        className=" bg-danger text-white p-2 rounded-lg font-semibold"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </nav>
  );
}
export default NavBar;
