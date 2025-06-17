import { useState, useContext, useMemo, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkAccessToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return false;
    try {
      const response = await fetch("/auth/v1/ping", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        setLoggedIn(true);
        return true;
      } else {
        setLoggedIn(false);
        return false;
      }
    } catch (error) {
      console.error("Access token check failed:", error);
      setLoggedIn(false);
      return false;
    }
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;
    try {
      const response = await fetch("/auth/v1/refreshToken", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setLoggedIn(true);
        return data;
      } else {
        setLoggedIn(false);
        return null;
      }
    } catch (error) {
      console.error("Refresh token failed:", error);
      setLoggedIn(false);
      return null;
    }
  };

  const loginWithCredentials = async (username, password) => {
    try {
      const response = await fetch("/auth/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setLoggedIn(true);
        navigate("/");
        return true;
      } else {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }
    } catch (error) {
      throw new Error("Login error: " + error.message);
    }
  };

  const login = async () => {
    const isValid = await checkAccessToken();
    if (isValid) {
      return true;
    }
    const data = await refreshAccessToken();
    if (data) {
      navigate("/");
      return true;
    }
    setLoggedIn(false);
    navigate("/login");
    return false;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const isPublicPath =
      ["/signup", "/forgotPassword", "/sign", "/oauth-success"].includes(
        location.pathname
      ) || location.pathname.startsWith("/resetPassword");

    if (!isPublicPath) {
      login();
    }
  }, [location.pathname]);

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      loginWithCredentials,
    }),
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
