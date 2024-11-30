import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "../routes/routes";
import LoginPage from "./auth/login/LoginPage";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
import RegisterPage from "./auth/register/RegisterPage";
import { UserProvider } from "../context/UserProvider";

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
          <Route path={`${StudentRoutes.STUDENT}/*`} element={<Student />} />
          <Route path={`${TeacherRoutes.TEACHER}/*`} element={<Teacher />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
