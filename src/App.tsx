import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "../models/routes";
import LoginPage from "./auth/login/LoginPage";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
import RegisterPage from "./auth/register/RegisterPage";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="*" element={<div>Route Not Found</div>} />
        <Route path="/" element={<LoginPage />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
        <Route path={`${StudentRoutes.STUDENT}/*`} element={<Student />} />
        <Route path={`${TeacherRoutes.TEACHER}/*`} element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
