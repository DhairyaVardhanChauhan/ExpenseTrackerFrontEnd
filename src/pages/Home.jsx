import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return <div className="text-zinc-950">Home</div>;
};
export default Home;
