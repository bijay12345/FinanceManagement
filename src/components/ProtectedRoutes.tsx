import type { JSX } from "react"
import { useAppSelector } from "../app/hooks"
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoutes