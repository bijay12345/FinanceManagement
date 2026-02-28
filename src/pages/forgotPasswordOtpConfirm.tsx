import { useLocation } from "react-router-dom";
import ConfirmUser from "./confirmUser"

const ForgotPasswordOtpConfirm = () => {
    const location = useLocation();
    const email = location.state?.email;
    return (<>
        <ConfirmUser email={email} confirmationType="forgot-password" />
    </>
    )
}

export default ForgotPasswordOtpConfirm