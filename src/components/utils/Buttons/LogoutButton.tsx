import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../features/auth/AuthSlice";
import SubmitButton from "./SubmitButton";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <>
      <div onClick={logoutUser}>
        <SubmitButton text="Logout" colorFormat="#f12424" />
      </div>
    </>
  );
};

export default LogoutButton;
