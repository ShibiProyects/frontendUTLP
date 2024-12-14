import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, PencilIcon, SaveIcon, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/auth/components/form";
import { UserModelForm } from "@/features/auth/user.model";

const profileSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters"),
  username: z.string().min(6, "Username must be at least 6 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
});

type ProfileData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<UserModelForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      password: "password",
      confirmPassword: "password",
    },
  });

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: ProfileData) => {
    if (data.password !== data.confirmPassword) {
      alert("Password dont match");
      return;
    }
    console.log("Form submitted:", data);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)] bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Mi cuenta
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de usuario</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          disabled={!isEditing}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          disabled={!isEditing}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant={`${isEditing ? "destructive" : "default"}`}
                onClick={toggleEdit}
              >
                {isEditing ? (
                  <>
                    <X className="mr-2 h-4 w-4" /> Cancelar
                  </>
                ) : (
                  <>
                    <PencilIcon className="mr-2 h-4 w-4" /> Editar cuenta
                  </>
                )}
              </Button>
              {isEditing && (
                <Button type="submit">
                  <SaveIcon className="mr-2 h-4 w-4" /> Guardar cambios
                </Button>
              )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
