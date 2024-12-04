import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Roles, UserModel } from "../models/user.model";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../routes/routes";

interface UserContextType {
  user: UserModel | null;
  createUser: (email: string, role: Roles) => void;
  logout: () => void;
}

const userContext = React.createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function useUserContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de un UserProvider");
  }
  return context;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserModel | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role") as Roles;

    if (email && role) {
      setUser({ email, role });
    }
  }, []);

  function createUser(email: string, role: Roles) {
    setUser({ email, role });

    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
  }

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate(PublicRoutes.LOGIN, { replace: true });
  }

  return (
    <userContext.Provider value={{ user, createUser, logout }}>
      {children}
    </userContext.Provider>
  );
}
