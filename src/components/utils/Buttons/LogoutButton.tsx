import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../features/auth/AuthSlice";
import AppFeatureButton from "./AppFeatureButton";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <>
      <AppFeatureButton text="Logout" colorFormat="#f12424" onClick={logoutUser} />
    </>
  );
};

export default LogoutButton;
