import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Transaction from "../pages/Transaction";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ConfirmUser from "../pages/confirmUser";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/validate-otp" element={<ConfirmUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
