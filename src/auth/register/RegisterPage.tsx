import { useForm } from "react-hook-form";
import { TextField } from "../../components/TextField";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/routes";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    if (data.password !== data.confirm_password) alert("Password dont match");
  };

  return (
    <>
      <nav className=" h-[40px] bg-blue-300 flex justify-around items-center ">
        <Link to={`/${PublicRoutes.REGISTER}`} replace>
          Register
        </Link>
        <Link to={`/${PublicRoutes.LOGIN}`}>Login</Link>
      </nav>
      <div className="h-full items-center justify-center flex flex-col ">
        <h3>Register</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
              label="Username"
              error={errors.username?.message}
            />
          </div>

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

          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
              })}
              type="password"
              label="Confirm password"
              error={errors.confirm_password?.message}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
export default RegisterPage;
