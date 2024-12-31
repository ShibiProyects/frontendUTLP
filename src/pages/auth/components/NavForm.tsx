import { PublicRoutes } from "@/routes/routes";
import { Link } from "react-router-dom";

function NavForm() {
  return (
    <nav className="h-[40px] bg-blue text-white font-semibold py-5 flex justify-around items-center ">
      <Link to={`/${PublicRoutes.REGISTER}`} replace>
        Crear cuenta
      </Link>
      <Link to={`/${PublicRoutes.LOGIN}`} replace>
        Iniciar sesión
      </Link>
    </nav>
  );
}
export default NavForm;
