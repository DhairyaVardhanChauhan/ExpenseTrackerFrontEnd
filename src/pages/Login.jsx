import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";
import { useAuth } from "../provider/AuthProvider";
const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const redirect_uri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithCredentials } = useAuth();

  const handleSelfLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithCredentials(username, password);
    } catch (error) {
      alert(error.message || "Login failed");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-screen flex items-center justify-center bg-[#f3f3ff] p-4 overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
          <img
            src="src/assets/login.gif"
            alt="Login Graphic"
            className="max-w-full max-h-full object-contain rounded-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Log In
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Enter your username and password to login to our dashboard.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSelfLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-center items-center mt-3">
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_uri}&response_type=code&client_id=${client_id}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&access_type=offline`}
              className="flex items-center gap-3 px-6 py-3 text-black border-2 border-solid border-black bg-white hover:bg-gray-200 rounded-xl shadow-md transition duration-300"
            >
              <img
                src="/src/assets/google-logo.png"
                alt="Google Logo"
                className="w-6 h-6"
              />
              <span className="font-medium cursor-pointer">
                Sign In with Google
              </span>
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="mt-1 text-center md:text-left">
            <Link
              to="/forgotPassword"
              className="text-indigo-500 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
