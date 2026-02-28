import { useLocation } from "react-router-dom"
import ConfirmUser from "./confirmUser"

const SignupOtpVerification = () => {
    const location = useLocation();
    const email = location.state?.email;
    return (
        <>
            <ConfirmUser email={email} confirmationType="signup" />
        </>
    )
}

export default SignupOtpVerification