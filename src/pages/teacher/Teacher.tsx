import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { CommonRoutes, TeacherRoutes } from "@/routes/routes";
import DashboardPage from "./dashboard/DashboardPage";
import AccountPage from "../common/account-page/AccountPage";
import HomePage from "../common/home-page/HomePage";
import NavBar from "../../components/NavBar";
import CourseModules from "../common/course-modules/components/CourseModules";
import { Roles } from "@/models/user.model";
import StudentDetails from "./student-details/StudentDetails";

function Teacher() {
  return (
    <>
      <NavBar role={Roles.TEACHER_ROLE}>
        <Link
          to={`/${TeacherRoutes.TEACHER}/${TeacherRoutes.DASHBOARD}`}
          replace
        >
          Dashboard
        </Link>
      </NavBar>

      <Routes>
        <Route path="/" element={<Navigate to={CommonRoutes.HOME} />} />
        <Route path={CommonRoutes.HOME} element={<HomePage />} />
        <Route path={CommonRoutes.ACCOUNT} element={<AccountPage />} />
        <Route path={CommonRoutes.COURSE_MODULES} element={<CourseModules />} />

        <Route path={TeacherRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route
          path={`${TeacherRoutes.STUDENT_DETAILS}/*`}
          element={<StudentDetails />}
        />
      </Routes>
    </>
  );
}
export default Teacher;
