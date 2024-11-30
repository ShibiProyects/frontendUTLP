import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { CommonRoutes, TeacherRoutes } from "../../../routes/routes";
import DashboardPage from "./dashboard/DashboardPage";
import AccountPage from "../common/AccountPage";
import CourseModules from "../common/CourseModules";

function Teacher() {
  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link
          to={`/${TeacherRoutes.TEACHER}/${TeacherRoutes.DASHBOARD}`}
          replace
        >
          Dashboard
        </Link>
        <Link to={`/${TeacherRoutes.TEACHER}/${CommonRoutes.ACCOUNT}`} replace>
          Account
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to={TeacherRoutes.DASHBOARD} />} />
        <Route path={TeacherRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={CommonRoutes.ACCOUNT} element={<AccountPage />} />
        <Route path={CommonRoutes.COURSE_MODULES} element={<CourseModules />} />
      </Routes>
    </>
  );
}
export default Teacher;
