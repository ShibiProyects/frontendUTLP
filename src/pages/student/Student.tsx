import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { CommonRoutes, StudentRoutes } from "../../../routes/routes";
import { SVGhome, SVGsettings } from "../../../assets/Icons";
import HomePage from "../common/HomePage";
import AccountPage from "../common/AccountPage";
import { useUserContext } from "../../../context/UserProvider";

function Student() {
  const { logout } = useUserContext();
  return (
    <>
      <nav className=" min-h-10 py-2 w-full bg-blue-300 flex justify-around items-center sticky top-0 left-0 ">
        <Link to={`/${StudentRoutes.STUDENT}/${CommonRoutes.HOME}`}>
          <SVGhome />
        </Link>
        <Link to={`/${StudentRoutes.STUDENT}/${CommonRoutes.ACCOUNT}`}>
          <SVGsettings />
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
        <Route path={CommonRoutes.HOME} element={<HomePage />} />
        <Route path={CommonRoutes.ACCOUNT} element={<AccountPage />} />
      </Routes>
    </>
  );
}
export default Student;
