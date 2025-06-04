import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const navigateToLoginScreen = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/auth/v1/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          password: formData.password,
          username: formData.userName,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        console.log("Signup Success:", data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Signup Failed:", errorData);
      }
    } catch (error) {
      console.error("Network error during signup:", error);
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
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
          <img
            src="src/assets/signup.gif"
            alt="Signup Graphic"
            className="max-w-full max-h-full object-contain rounded-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Sign Up
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Create your account by filling the information below.
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={navigateToLoginScreen}
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
            </div>

            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
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
