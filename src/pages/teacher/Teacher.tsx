import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { CommonRoutes, TeacherRoutes } from "../../../routes/routes";
import DashboardPage from "./dashboard/DashboardPage";
import AccountPage from "../common/account-page/AccountPage";
import CourseModules from "../common/course-modules/CourseModules";
import HomePage from "../common/home-page/HomePage";
import { useUserContext } from "../../../context/UserProvider";

function Teacher() {
  const { logout } = useUserContext();

  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link to={`/${TeacherRoutes.TEACHER}/${CommonRoutes.HOME}`} replace>
          Home
        </Link>
        <Link
          to={`/${TeacherRoutes.TEACHER}/${TeacherRoutes.DASHBOARD}`}
          replace
        >
          Dashboard
        </Link>
        <Link to={`/${TeacherRoutes.TEACHER}/${CommonRoutes.ACCOUNT}`} replace>
          Account
        </Link>
        <button
          className=" bg-red-500 text-white p-2 rounded-lg font-bold"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to={CommonRoutes.HOME} />} />
        <Route path={TeacherRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={CommonRoutes.ACCOUNT} element={<AccountPage />} />
        <Route path={CommonRoutes.HOME} element={<HomePage />} />
        <Route path={CommonRoutes.COURSE_MODULES} element={<CourseModules />} />
      </Routes>
    </>
  );
}
export default Teacher;
