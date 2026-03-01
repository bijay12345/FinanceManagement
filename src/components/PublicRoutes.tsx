import type { JSX } from "react"
import { useAppSelector } from "../app/hooks"
import { Navigate } from "react-router-dom";


const PublicRoutes = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />
    }

    return children;


}

export default PublicRoutes