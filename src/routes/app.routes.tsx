import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Transaction from "../pages/Transaction";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPasswordEmail from "../pages/ForgotPasswordEmail";
import ForgotPasswordOtpConfirm from "../pages/forgotPasswordOtpConfirm";
import SignupOtpVerification from "../pages/signupOtpVerification";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-otp-verification" element={<SignupOtpVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/forgot-password-email" element={<ForgotPasswordEmail />} />
        <Route path="/forgot-password-otp-confirm" element={<ForgotPasswordOtpConfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
