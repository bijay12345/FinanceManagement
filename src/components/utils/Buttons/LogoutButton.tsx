import { Link } from "react-router-dom";

type ButtonProp = {
  to: string;
};

const LogoutButton = ({ to }: ButtonProp) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm font-medium rounded-md 
                    bg-[#f12424] text-white 
                    hover:opacity-90 transition inline-block"
    >
      Logout
    </Link>
  );
};

export default LogoutButton;
