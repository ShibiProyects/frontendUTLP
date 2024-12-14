import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Student from "./pages/student/Student";
import RegisterPage from "./pages/auth/register/RegisterPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { UserProvider } from "./context/UserProvider";
import AuthGuard from "./utilities/AuthGuard";
import { Roles } from "./models/user.model";
import Teacher from "./pages/teacher/Teacher";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <UserProvider>
        <Routes>
          <Route path="*" element={<div>Route Not Found</div>} />
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
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
