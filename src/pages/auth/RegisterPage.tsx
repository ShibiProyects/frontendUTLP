import { useForm } from "react-hook-form";
import { TextField } from "@/pages/auth/components/TextField";
import { Button } from "@/components/ui/button";
import { RegisterModel } from "./models/auth.model";
import { PublicRoutes } from "@/routes/routes";
import NavForm from "./components/NavForm";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>();

  const onSubmit = (data: RegisterModel) => {
    console.log(data);
    if (data.password !== data.confirmPassword) alert("Password dont match");
  };

  return (
    <>
      <NavForm />
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
