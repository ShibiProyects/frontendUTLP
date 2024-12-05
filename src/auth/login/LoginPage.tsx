import { useForm } from "react-hook-form";
import { TextField } from "../../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import {
  PublicRoutes,
  StudentRoutes,
  TeacherRoutes,
} from "../../../routes/routes";
import { useUserContext } from "../../../context/UserProvider";
import { Roles } from "../../../models/user.model";
import decodeJWT from "../../../utilities/decodeJWT";

type LoginForm = {
  email: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const { createUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await fetch("http://localhost:400/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error desconocido");
      }

      const responseData = await response.json();

      if (responseData) {
        const jwtDecode = decodeJWT(responseData.token);
        const jwtRoles = jwtDecode.roles;
        createUser(responseData.token, jwtRoles);

        if (jwtRoles[0] === Roles.TEACHER_ROLE) {
          navigate(`/${TeacherRoutes.TEACHER}`, { replace: true });
        }

        if (jwtRoles[0] === Roles.STUDENT_ROLE) {
          navigate(`/${StudentRoutes.STUDENT}`, { replace: true });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link to={`/${PublicRoutes.REGISTER}`} replace>
          Register
        </Link>
        <Link to={`/${PublicRoutes.LOGIN}`} replace>
          Login
        </Link>
      </nav>
      <div className="h-full items-center justify-center flex flex-col">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              type="email"
              label="Email"
              error={errors.email?.message}
            />
          </div>

          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              type="password"
              label="Password"
              error={errors.password?.message}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
