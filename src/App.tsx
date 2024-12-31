import { Navigate, Route, Routes } from "react-router-dom";
import Student from "./pages/student/Student";
import AuthGuard from "./utilities/AuthGuard";
import { Roles } from "./models/user.model";
import Teacher from "./pages/teacher/Teacher";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "./routes/routes";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>Page not found - 404</div>} />
      <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
      <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />

      <Route element={<AuthGuard role={Roles.STUDENT_ROLE} />}>
        <Route path={`${StudentRoutes.STUDENT}/*`} element={<Student />} />
      </Route>

      <Route element={<AuthGuard role={Roles.TEACHER_ROLE} />}>
        <Route path={`${TeacherRoutes.TEACHER}/*`} element={<Teacher />} />
      </Route>
    </Routes>
  );
}
export default App;
