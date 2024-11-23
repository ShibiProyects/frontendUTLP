import { useForm } from "react-hook-form";
import ButtonStyled from "../../components/button-styled/ButtonStyled";
import { TextField } from "../../components/text-field/TextField";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../models/routes";

type LoginForm = {
  username: string;
  email: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
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

          <ButtonStyled type="submit">Login</ButtonStyled>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
