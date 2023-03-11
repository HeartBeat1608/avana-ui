import { createContext, useCallback, useContext, useEffect } from "react";

interface AuthUserType {
  username: string;
  id: string;
  role?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: AuthUserType;
  access_token: string;
  refresh_token: string;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: {
    username: 'Guest',
    id: 'NA',
    role: 'Guest'
  },
  access_token: '',
  refresh_token: ''
});

export const useLoggedIn = () => {
  const ctx = useContext(AuthContext);
  return ctx.isLoggedIn;
}

export const useAuthContext = () => useContext(AuthContext);

