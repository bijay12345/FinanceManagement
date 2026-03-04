import { useNavigate } from "react-router-dom"
import logo from "../../../assets/logo.png";

const Logo = () => {
    const navigate = useNavigate();
    const redirectToLink = () => {
        navigate("/dashboard");
    }
    return (

        <>
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="logo" className="h-auto w-30" onClick={redirectToLink} />
            </div>
        </>
    )
}

export default Logo