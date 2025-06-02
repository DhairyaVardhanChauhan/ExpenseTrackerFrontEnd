import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

const Login = () => {
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

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Log In
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Enter your email and password to login to our dashboard.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="mt-1 text-center md:text-left">
            <a href="#" className="text-indigo-500 text-sm hover:underline">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
