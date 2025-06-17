import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { AuthProvider } from "./provider/AuthProvider.jsx";
import { ProtectedRoute } from "./provider/ProtectedRoute.jsx";
import { PublicRoute } from "./provider/PublicRoute.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Oauth from "./pages/Oauth.jsx";
import GoogleCallbackHandler from "./pages/GoogleCallbackHandler.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/sign" element={<Oauth />} />
          <Route
            path="/oauth-success"
            element={<GoogleCallbackHandler></GoogleCallbackHandler>}
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
