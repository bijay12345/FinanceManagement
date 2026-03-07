import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import ForgotPasswordEmail from "../pages/ForgotPasswordEmail";
import ForgotPasswordOtpConfirm from "../pages/forgotPasswordOtpConfirm";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import SignupOtpVerification from "../pages/SignupOtpVerification";
import Statistics from "../pages/Statistics";
import Transaction from "../pages/Transaction";

// AUTHENTICATED ROUTES
const AuthenticatedRoutes = [
    {
        path: "/",
        element: Dashboard
    },
    {
        path: "/dashboard",
        element: Dashboard
    },
    {
        path: "/statistics",
        element: Statistics
    },
    {
        path: "/transaction",
        element: Transaction
    },
    {
        path: "/customers",
        element: Customer
    },
    {
        path: "/products",
        element: Products
    }
];

// NON AUTHENTICATED ROUTES
const NonAuthenticatedRoutes = [
    {
        path: "/login",
        element: Login
    },
    {
        path: "/signup",
        element: Signup
    },
    {
        path: "/signup-otp-verification",
        element: SignupOtpVerification
    },
    {
        path: "/forgot-password-email",
        element: ForgotPasswordEmail
    },
    {
        path: "/forgot-password-otp-confirm",
        element: ForgotPasswordOtpConfirm
    }
];


export { AuthenticatedRoutes, NonAuthenticatedRoutes }