import { Navigate, Route, Routes } from "react-router";
import { CommonRoutes } from "@/routes/routes";
import HomePage from "../common/home-page/HomePage";
import AccountPage from "../common/account-page/AccountPage";
import NavBar from "../../components/NavBar";
import CourseModules from "../common/course-modules/components/CourseModules";
import { Roles } from "@/models/user.model";

function Student() {
  return (
    <>
      <NavBar role={Roles.STUDENT_ROLE}></NavBar>

      <Routes>
        <Route path="/" element={<Navigate to={CommonRoutes.HOME} />} />
        <Route path={CommonRoutes.HOME} element={<HomePage />} />
        <Route path={CommonRoutes.ACCOUNT} element={<AccountPage />} />
        <Route path={CommonRoutes.COURSE_MODULES} element={<CourseModules />} />
      </Routes>
    </>
  );
}
export default Student;
