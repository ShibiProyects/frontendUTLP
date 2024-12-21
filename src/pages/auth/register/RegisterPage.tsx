import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/routes";
import { TextField } from "@/features/auth/components/TextField";
import { RegisterForm } from "@/features/auth/auth.model";
import { Button } from "@/components/ui/button";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    if (data.password !== data.confirmPassword) alert("Password dont match");
  };

  return (
    <>
      <nav className="h-[40px] bg-blue text-white font-semibold py-5 flex justify-around items-center ">
        <Link to={`/${PublicRoutes.REGISTER}`} replace>
          Crear cuenta
        </Link>
        <Link to={`/${PublicRoutes.LOGIN}`} replace>
          Iniciar sesión
        </Link>
      </nav>
      <div className="h-full items-center justify-center flex flex-col ">
        <h3>Crear cuenta</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
              label="First name"
              error={errors.username?.message}
            />
          </div>

          <div className="flex flex-col mb-4 gap-1">
            <TextField
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
              label="Last name"
              error={errors.username?.message}
            />
          </div>

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
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
              })}
              type="password"
              label="Confirm password"
              error={errors.confirmPassword?.message}
            />
          </div>
          <Button type="submit" variant="default">
            Crear cuenta
          </Button>
        </form>
      </div>
    </>
  );
}
export default RegisterPage;
