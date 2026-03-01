import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Transaction from "../pages/Transaction";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPasswordEmail from "../pages/ForgotPasswordEmail";
import ForgotPasswordOtpConfirm from "../pages/forgotPasswordOtpConfirm";
import SignupOtpVerification from "../pages/SignupOtpVerification";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } />

        <Route path="/login" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />

        <Route path="/signup" element={
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        } />

        <Route path="/signup-otp-verification" element={
          <PublicRoutes>
            <SignupOtpVerification />
          </PublicRoutes>
        } />

        <Route path="/dashboard" element=
          {
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } />

        <Route path="/statistics" element={
          <ProtectedRoutes>
            <Statistics />
          </ProtectedRoutes>
        } />

        <Route path="/transaction" element={
          <ProtectedRoutes>
            <Transaction />
          </ProtectedRoutes>
        } />

        <Route path="/forgot-password-email" element={
          <PublicRoutes>
            <ForgotPasswordEmail />
          </PublicRoutes>
        } />

        <Route path="/forgot-password-otp-confirm" element={
          <PublicRoutes>
            <ForgotPasswordOtpConfirm />
          </PublicRoutes>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
