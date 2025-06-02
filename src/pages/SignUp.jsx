import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Signup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.9 }}
      className="min-h-screen w-screen flex items-center justify-center bg-[#f3f3ff] p-4 overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
          <img
            src="src/assets/signup.gif"
            alt="Signup Graphic"
            className="max-w-full max-h-full object-contain rounded-full"
          />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Sign Up
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Create your account by filling the information below.
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
            </div>

            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
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
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
            Already have an account?{" "}
            <Link to="/" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
