import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const expiry = localStorage.getItem("expiry");

    if (storedToken && storedUser && expiry) {
      if (Date.now() < Number(expiry)) {
        setUser(JSON.parse(storedUser));
      } else {
        logout();
      }
    }

    setLoading(false);
  }, []);

  const login = (token, userData, expiresIn) => {
    const expiryTime = Date.now() + expiresIn;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("expiry", expiryTime);

    setUser(userData);

    setTimeout(() => {
      logout();
    }, expiresIn);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

