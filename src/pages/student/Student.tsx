import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { StudentRoutes } from "../../../models/routes";
import HomePage from "./home/HomePage";
import AccountPage from "./account/AccountPage";

function Student() {
  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link to={`/${StudentRoutes.STUDENT}/${StudentRoutes.HOME}`}>Home</Link>
        <Link to={`/${StudentRoutes.STUDENT}/${StudentRoutes.ACCOUNT}`}>
          Account
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to={StudentRoutes.HOME} />} />
        <Route path={StudentRoutes.HOME} element={<HomePage />} />
        <Route path={StudentRoutes.ACCOUNT} element={<AccountPage />} />
      </Routes>
    </>
  );
}
export default Student;
