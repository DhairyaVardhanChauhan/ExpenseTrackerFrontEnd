import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallbackHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, curr) => {
      const [key, value] = curr.trim().split("=");
      acc[key] = value;
      return acc;
    }, {});

    const accessToken = cookies["accessToken"];
    const refreshToken = cookies["refreshToken"];
  
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Authenticating with Google...</p>;
};

export default GoogleCallbackHandler;
