import { useForm } from "react-hook-form";
import { TextField } from "../../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes, StudentRoutes } from "../../../routes/routes";
import { useUserContext } from "../../../context/UserProvider";

type LoginForm = {
  username: string;
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
      const response = await fetch("/users.json");
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const responseJSON = await response.json();

      const userValid = responseJSON.find(
        (user: { email: string; password: string }) =>
          user.email === data.email && user.password === data.password
      );
      if (userValid) {
        createUser(userValid.email, userValid.role);
        navigate(`/${StudentRoutes.STUDENT}`, { replace: true });
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error:", error);
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
