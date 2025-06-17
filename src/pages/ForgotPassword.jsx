import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("auth/v1/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: email,
      });

      if (res.ok) {
        alert("Password reset email sent.");
        navigate("/login");
      } else {
        const err = await res.text();
        alert(err || "Failed to send reset email");
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
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
        {/* Left Side with Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
          <img
            src="src/assets/forgot.gif"
            alt="Forgot Password Graphic"
            className="max-w-full max-h-full object-contain rounded-full"
          />
        </div>

        {/* Right Side with Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Forgot Password
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Enter your email to receive a password reset link.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500 text-center md:text-left">
            Remembered your password?{" "}
            <span
              className="text-indigo-600 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Go Back to Login
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
